"use strict";

const Promise = require("bluebird");
const Base64 = require("js-base64").Base64;
const config = require("./config");

class Veesp {
  constructor(userInfo = { username: "admin", password: "password" }) {
    this.token = Base64.encode(userInfo.username + ":" + userInfo.password);
  }
  get getToken() {
    return this.token;
  }
}

module.exports = Veesp;
