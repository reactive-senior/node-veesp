/**
 * Account Class
 */

class account {
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

module.exports = account;
