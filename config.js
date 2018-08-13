const fs = require("fs");

if (fs.existsSync(__dirname + "/config/credentials.js")) {
  exports.credentials = require(__dirname + "/config/credentials.js");
} else {
  exports.credentials = {
    email: "admin@mail.com",
    password: "password"
  };
}

exports.axiosInstance = require(__dirname + "/config/axiosInstance.js");
