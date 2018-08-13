const Promise = require("bluebird");

/**
 * Account Class
 */

class Account {
  constructor(veespInstance) {
    this.veesp = veespInstance;
  }
  details() {
    return this.veesp.communicate("details");
  }
  balance() {
    return this.veesp.communicate("balance");
  }
}

module.exports = Account;
