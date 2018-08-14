var Veesp = require("../veesp");

describe("Veesp:acount", function() {
  "use strict";

  describe("details", function() {
    var veespInstance;
    beforeEach(function() {
      veespInstance = new Veesp();
    });

    it("should return account info", function(done) {
      this.timeout(5000);
      return veespInstance.account
        .details()
        .then(response => {
          expect(response.data.client.email).to.be.ok();
          expect(response.data.client.ip).to.be.ok();
          expect(response.data.client.host).to.be.ok();
          expect(response.data.client.firstname).to.be.ok();
        })
        .then(done, done);
    });
  });

  describe("balance", function() {
    var veespInstance;
    beforeEach(function() {
      veespInstance = new Veesp();
    });

    it("should return balance info", function(done) {
      this.timeout(5000);
      return veespInstance.account
        .balance()
        .then(response => {
          expect(response.data.details.acc_balance).to.be.ok();
          expect(response.data.details.acc_credit).to.be.ok();
        })
        .then(done, done);
    });
  });
});
