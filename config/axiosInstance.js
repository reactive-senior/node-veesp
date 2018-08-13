const axios = require("axios");
var axiosInstance = axios.create({
  baseURL: "https://secure.veesp.com/api"
});

module.exports = axiosInstance;
