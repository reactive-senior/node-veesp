/**
 * Payment Class
 */

class payment {
  constructor(veespInstance) {
    this.veesp = veespInstance;
  }
  paymentMethods() {
    return this.veesp.communicate("GET", "payment");
  }
}

module.exports = payment;
