const { default: axios } = require("axios");

export const https = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*"
  }
});