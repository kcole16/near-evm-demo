const { NearProvider, nearlib } = require('near-web3-provider');
const web3 = require('web3');

// Configuration to run locally.
const TEST_NEAR_ACCOUNT = 'test.near';
const testAccount = web3.utils.keccak256(TEST_NEAR_ACCOUNT).slice(26, 66);
const testNetworkId = 'test';

const keyPairString = 'ed25519:2wyRcSwSuHtRVmkMCGjPwnzZmQLeXLzLLyED1NDMt4BjnKgQL6tF85yBx6Jr26D2dUNeC716RBoTxntVHsegogYw';
const keyPair = nearlib.utils.KeyPair.fromString(keyPairString);
const testKeyStore = new nearlib.keyStores.InMemoryKeyStore();
testKeyStore.setKey(testNetworkId, TEST_NEAR_ACCOUNT, keyPair);

// Configuration for TestNet.
ACCOUNT_ID = 'illia.china'
const fileKeyStore = new nearlib.keyStores.UnencryptedFileSystemKeyStore('neardev');
const networkId = 'default';
const defaultAccount = web3.utils.keccak256(ACCOUNT_ID).slice(26, 66);


module.exports = {
  networks: {
    near: {
        network_id: '99',
        provider: function() {
            return new NearProvider('https://rpc.nearprotocol.com', fileKeyStore, ACCOUNT_ID, networkId, 'denver-evm');
        },
        from: defaultAccount,
        skipDryRun: true
    },

    near_test: {
        network_id: '98',
        provider: function() {
            return new NearProvider('http://localhost:3030', testKeyStore, TEST_NEAR_ACCOUNT, testNetworkId);
        },
        from: testAccount,
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
