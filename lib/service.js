/**
 * Service Class
 */

class Service {
  constructor(veespInstance) {
    this.veesp = veespInstance;
  }
  getServices() {
    return this.veesp.communicate("GET", "service");
  }
}

module.exports = Service;
