"use strict";

var { credentials, axiosInstance } = require("./config");

const Promise = require("bluebird");
const Base64 = require("js-base64").Base64;

const Account = require(__dirname + "/lib/account");
const VPS = require(__dirname + "/lib/vps");
const Payment = require(__dirname + "/lib/payment");
const Service = require(__dirname + "/lib/service");

class Veesp {
  constructor(
    userInfo = { email: credentials.email, password: credentials.password }
  ) {
    this.token =
      "Basic " + Base64.encode(userInfo.email + ":" + userInfo.password);
    axiosInstance.defaults.headers.common["Authorization"] = this.token;

    this.account = new Account(this);
    this.vps = new VPS(this);
    this.payment = new Payment(this);
    this.service = new Service(this);
  }
  communicate(type, endPoint, data) {
    data = data || {};
    return Promise.delay(1000).then(function() {
      if (type === "GET") {
        return axiosInstance.get(endPoint);
      } else if (type === "POST") {
        return axiosInstance.post(endPoint, data);
      }
    });
  }
}

module.exports = Veesp;
