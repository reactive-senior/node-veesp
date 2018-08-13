/**
 * VPS Class
 */

class VPS {
  constructor(veespInstance) {
    this.veesp = veespInstance;
  }
  list(id) {
    return this.veesp.communicate(`service/${id}/vms`);
  }
  find(id, vmid) {
    return this.veesp.communicate(`service/${id}/vms/${vmid}`);
  }
  reboot(id, vmid) {
    return this.veesp.communicate(`service/${id}/vms/${vmid}/reboot`);
  }
}

module.exports = VPS;
