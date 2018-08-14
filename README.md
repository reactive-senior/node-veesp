# node-veesp

Node.js Promise-based library to communicate with the Veesp API

## Enable the Veesp API

Open config/credentials.js and change username and password to your real one to enable Veesp API wrapper.

## Veesp

### constructor({username: "login", password: "password"})

```js
const Veesp = require("Veesp");
const veespInstance = new Veesp({
  username: "YourEmailAddressHere",
  password: "YourPasswordHere"
});
```

The constructor uses credentials from config/credentials.js by default and you may don't need to write your credentials to the constructor.

## veesp.service

### veespInstance.service.getServices()

Get services that you are currently using or was using

```js
veespInstance.service.getServices().then(response => {
  // Returns Object with services info
});
```

## veesp.account

### veespInstance.account.details()

Get details about the account

```js
veespInstance.account.details().then(response => {
  // Returns Object with account info
});
```

### veespInstance.account.balance()

Get details about the account's balance

```js
veespInstance.account.balance().then(response => {
  // Returns Object with account balance
});
```

## veesp.vps

### veespInstance.vps.list(id)

- function description
  get list of vps under service number(id)
- parameter description
  id is number of service and can get veesp.Service class

```js
veespInstance.vps.list(id).then(response => {
  // Returns Object with VPS info under certain service number
});
```

### veespInstance.vps.find(id, vmid)

- function description
  get details about VM indicated in the parameters
- parameter description
  id is number of service and can get veesp.Service class
  vmid is number of service and can get veesp.Vps class: product related functions

```js
veespInstance.vps.find(id, vmid).then(response => {
  // Returns Object with VM details
});
```

### veespInstance.vps.reboot(id, vmid)

- function description
  reboot the vm indicated in the parameter
- parameter description
  id is number of service and can get veesp.Service class
  vmid is number of service and can get veesp.Vps class: product related functions

```js
veespInstance.vps.reboot(id, vmid).then(response => {
  // Stats code from reboot
});
```

### veespInstance.vps.create(options)

- function description
  order a new service with options object
- parameter description
  options = {product_id: number, domain: string, cycle: string, pay_method: number, custom: array}

  product_id: you can get product_id from vps class: product related functions, it's id of product that you are going to order
  domain: your new domain name(ex: yourdomain.com)
  cycle: billing cycle(ex: "m" for monthly)
  pay_method: payment method you like to pay your new order(ex: 3 for paypal), it has paypal, webmoney, banktransfer, paymentcard, bitcoin
  custom: it's custom array that you gonna add more info to new the new order. Default is empty array

```js
veespInstance.vps.create(options).then(response => {
  // VMID of your new VM
});
```
