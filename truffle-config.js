const path = require('path')
var PrivateKeyProvider = require("truffle-privatekey-provider");

const privateKey = process.env.PRIVATEKEY;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "./app/contracts"),
  compilers: {
    solc: {
      version: "0.5.11", // A version or constraint - Ex. "^0.5.0"
                         // Can also be set to "native" to use a native solc
      settings: {
        optimizer: {
          enabled: true,
          runs: 200   // Optimize for how many times you intend to run the code
        },
        //evmVersion: <string> // Default: "petersburg"
      }
    }
  },
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
    },
    kovan: {
      provider: new PrivateKeyProvider(privateKey, "https://kovan.infura.io/27e484dcd9e3efcfd25a83a78777cdf1/"),
      network_id: 42,
      skipDryRun: true
    }
  }
};
