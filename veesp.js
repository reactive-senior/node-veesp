"use strict";

var { credentials, axiosInstance } = require("./config");

const Promise = require("bluebird");
const Base64 = require("js-base64").Base64;

class Veesp {
  constructor(
    userInfo = { email: credentials.email, password: credentials.password }
  ) {
    this.token = Base64.encode(userInfo.email + ":" + userInfo.password);
  }
  get getToken() {
    return this.token;
  }
}

module.exports = Veesp;
