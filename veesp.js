"use strict";

var { credentials, axiosInstance } = require("./config");

const Promise = require("bluebird");
const Base64 = require("js-base64").Base64;

const Account = require(__dirname + "/lib/account");

class Veesp {
  constructor(
    userInfo = { email: credentials.email, password: credentials.password }
  ) {
    this.token =
      "Basic " + Base64.encode(userInfo.email + ":" + userInfo.password);
    axiosInstance.defaults.headers.common["Authorization"] = this.token;
    this.account = new Account(this);
  }
  communicate(method, data, type) {
    data = data || {};
    const options = {
      url: method,
      method: "GET",
      json: true
    };
    // Check if it's method is POST
    if (Object.keys(data).length > 0) {
      options.method = "POST";
      options.form = data;
    }
    // In case we have data but still need to GET
    if (type !== void 0 && type !== "") {
      if (options.method === "POST" && type.toUpperCase() === "GET") {
        console.log("~~~");
      }
      options.method = type.toUpperCase();
    }
    return Promise.delay(1000).then(function() {
      if (options.method === "GET") {
        return axiosInstance.get(options.url);
      }
    });
  }
}

module.exports = Veesp;
