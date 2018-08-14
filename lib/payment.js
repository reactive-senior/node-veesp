/**
 * Payment Class
 */

class Payment {
  constructor(veespInstance) {
    this.veesp = veespInstance;
  }
  paymentMethods() {
    return this.veesp.communicate("GET", "payment");
  }
}

module.exports = Payment;
