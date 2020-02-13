## To run on Ethereum:

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
