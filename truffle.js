const nearlib = require('nearlib')
const NearProvider = require('near-web3-provider');
const web3 = require('web3');

const TEST_NEAR_ACCOUNT = 'test.near';
const account = web3.utils.keccak256(TEST_NEAR_ACCOUNT).slice(26, 66);
const nearNetworkId = 'test';

const keyPairString = 'ed25519:2wyRcSwSuHtRVmkMCGjPwnzZmQLeXLzLLyED1NDMt4BjnKgQL6tF85yBx6Jr26D2dUNeC716RBoTxntVHsegogYw';
const keyPair = nearlib.utils.KeyPair.fromString(keyPairString);
const keyStore = new nearlib.keyStores.InMemoryKeyStore();
keyStore.setKey(nearNetworkId, TEST_NEAR_ACCOUNT, keyPair);


module.exports = {
  networks: {
    near: {
        network_id: '99',
        provider: function() {
            return new NearProvider('http://localhost:3030', keyStore, TEST_NEAR_ACCOUNT, nearNetworkId);
        },
        from: account,
        skipDryRun: true
    },

    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.5.12',    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};
