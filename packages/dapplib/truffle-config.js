require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food repair razor ranch pulse gown light army gauge'; 
let testAccounts = [
"0x18dfc02f3302804e6dd1652d314e3f41b5469535d0b9197fa03e6e6a0f57481a",
"0x219805a8ae76ed686953389e784b5d38894fc884c84ebdd821615142f7bcfc2b",
"0x41c8032725750a9a0561c29266b09008367a2920e2c0c66d5b25861559b5fdf3",
"0x875ab8e3c1de7dfb4fd4a093d5e095bd4340aed609d5c71cdeb7b6284336ec22",
"0x774dff191ec8cd5f4aa56537c8b90e4d010eb373281a65e6747233c9c7158fdf",
"0x26610a1bcb20c8c21cd0572e60be46102627592b6c4dc8fb19501bcc2a159905",
"0x9f5d10af73f71464ebf5c2f18cb121552ce7760920505b7d0f01efe151b9a645",
"0x62f80dce39aa0d4bc642cdb889178950e3cd1dfacfcb4739db781645440a4b55",
"0x9454ce054e03293b9cb73d5d0fbc2cd321186540db8ef0c99a7839c7f2523b31",
"0x74e46d3abac29abb6fbe6ef171054d6ce0461fa6c0ffd776b1d35527c9e6a886"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

