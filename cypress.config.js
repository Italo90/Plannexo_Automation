const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://client-api.qa.cloud.bionexo.com.br/login'
  },
});
