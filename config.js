const fs = require("fs");

if (fs.existsSync(__dirname + "/config/data.js")) {
  exports.config = require(__dirname + "/config/data.js");
} else {
  exports.config = {};
}
