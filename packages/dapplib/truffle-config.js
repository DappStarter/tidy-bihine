require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle food charge reflect pizza smile coral light army giant'; 
let testAccounts = [
"0x90bdf09ff481d6e0242b1c2fdbaf346f47c2b2567e3db837170557fa0b20f07a",
"0x2513c5db1430887585c3692566208b49631b055bd399e94b0d69a927f3e2c695",
"0x3d37a7c21af4e610604148b6afb408acb9db507794c3ac5430682abdd4f7a601",
"0x97aad931b59d20af8c6b94005e629c46db0a685f6593f2372688758717a9e6c6",
"0x991985a12152385c3614389c49a2d7856d8cc8aed3f4e787b7b2a69c25343a75",
"0x4518d162cebf6ad19a0fd2d5cbb268a4f91025c4ec8c2ba8e6e1934474bd4ab3",
"0x0d948f14aba7a640b6a43fd47ad92306194d5e21be955fb5b8ef4e9548d6deac",
"0xa6b94349ac2c95677319ef9f865784adbd18bdb0c06b25da5bbac50ce079be19",
"0xbe306d03fa49459d93435ad68dfd27184a1c614cfb47cc6e03ea4fbfb91e4bb7",
"0x5d6c301845b5402c28c2de4909ac9993248aa8f03b4cd578edaacfea4392886e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

