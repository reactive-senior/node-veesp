/**
 * VPS Class
 */

class vps {
  constructor(veespInstance) {
    this.veesp = veespInstance;
  }
  category() {
    return this.veesp.communicate("GET", "category");
  }
  productInCategory(id) {
    return this.veesp.communicate("GET", `category/${id}/product`);
  }
  getProductConfig(id) {
    return this.veesp.communicate("GET", `order/${id}`);
  }
  list(id) {
    return this.veesp.communicate("GET", `service/${id}/vms`);
  }
  find(id, vmid) {
    return this.veesp.communicate("GET", `service/${id}/vms/${vmid}`);
  }
  reboot(id, vmid) {
    var data = {
      id: id,
      vmid: vmid
    };
    return this.veesp.communicate(
      "POST",
      `service/${id}/vms/${vmid}/reboot`,
      data
    );
  }
  destroy(id, vmid) {
    var data = {
      id: id,
      vmid: vmid
    };
    return this.veesp.communicate(
      "POST",
      `service/${id}/vms/${vmid}/destroy`,
      data
    );
  }
  create(
    options = {
      product_id: 212,
      domain: "weespAPITest.com",
      cycle: "m",
      pay_method: 3,
      custom: []
    }
  ) {
    return this.veesp.communicate(
      "POST",
      `order/${options.product_id}`,
      options
    );
  }
}

module.exports = vps;
