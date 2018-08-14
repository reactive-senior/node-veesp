/**
 * Service Class
 */

class service {
  constructor(veespInstance) {
    this.veesp = veespInstance;
  }
  getServices() {
    return this.veesp.communicate("GET", "service");
  }
}

module.exports = service;
