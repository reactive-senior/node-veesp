/**
 * Account Class
 */

class Account {
  constructor(veespInstance) {
    this.veesp = veespInstance;
  }
  details() {
    return this.veesp.communicate("GET", "details");
  }
  balance() {
    return this.veesp.communicate("GET", "balance");
  }
}

module.exports = Account;
