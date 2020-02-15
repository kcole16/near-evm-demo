## To run on Ganache:

```
npm install -g truffle
npm install -g ganache-cli

ganache-cli --port 7545
truffle migrate 
npm run dev
```

## To run on NEAR TestNet:

```
npm install -g truffle
npm install -g near-shell

# Create account or authorize existing account with NEAR wallet.
near login

# Modify truffle.js to use your account in ACCOUNT_ID and run:
truffle migrate --network near
```

## To use NEAR on the Frontend
```
import Web3 from "web3";
import { NearProvider } from 'near-web3-provider';
import * as nearlib from 'nearlib';

const config = {
  nodeUrl: 'https://rpc.nearprotocol.com',
  deps: {
    keyStore: new nearlib.keyStores.BrowserLocalStorageKeyStore()
  },
  networkId: 'default',
  walletUrl: 'https://wallet.nearprotocol.com',
};

async function initNear() {
  // Connect to NEAR RPC
  const near = await nearlib.connect(config);
  near.config = config;
  const walletAccount = new nearlib.WalletAccount(near);

  // Login via NEAR web wallet
  const account = await walletAccount.requestSignIn('denver-evm', 'EVM Deployment');
  const accountId = walletAccount.getAccountId();

  // Instantiate the near web3 provider
  return new NearProvider(config.nodeUrl, config.deps.keyStore, accountId, config.networkId, 'denver-evm');
}
const nearProvider = await initNear()
const web3 = new Web3(
    nearProvider
);

```


## To run on NEAR locally:

Install Rust:
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Install and run NEARCore:
```
git clone https://github.com/nearprotocol/nearcore
./scripts/start_unittest.py --local
```

Install truffle and near shell:
```
npm install -g truffle
npm install -g near-shell
```

Clone and build EVM contract:
```
git clone https://github.com/nearprotocol/near-evm
cd near-evm
rustup target add wasm32-unknown-unknown
./build.sh
```

Deploy EVM contract locally:
```
export NODE_ENV=local
near create_account evm --masterAccount=test.near --keyPath=<path to --home for near, default ~/.near>/validator_key.json
near deploy evm --accountId=evm --wasmFile=res/near_evm.wasm
```

Run truffle migration:
```
truffle migrate --network near_local
```

