const Promise = require("bluebird");

/**
 * Account Class
 */

class Account {
  constructor(veespInstance) {
    this.veesp = veespInstance;
    this.service = "account";
  }
}
