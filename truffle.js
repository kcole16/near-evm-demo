const nearlib = require('nearlib')
const NearProvider = require("near-web3-provider");

const keyStore = new nearlib.keyStores.UnencryptedFileSystemKeyStore('neardev');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    near: {
        network_id: "99",
        provider: function() {
            return new NearProvider("http://localhost:3030", keyStore, 'test1')
        },
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  }
};
