// npm-library
const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();
 
// privKey
const privKey = wallet.getPrivateKey();
console.log("privKey:", privKey);
console.log(privKey.toString('hex'));
 
// pubKey
const pubKey = wallet.getPublicKey();
console.log("pubKey:", pubKey);

//address
let addressA = wallet.getAddressString();
console.log("address", addressA);


//hashing pubKey to get address
const createKeccakHash = require("keccak");
const address = createKeccakHash("keccak256").update(pubKey).digest().slice(-20);
console.log("address from pubKey", "0x"+ address.toString('hex'));

//password
var key = Buffer.from('efca4cdd31923b50f4214af5d2ae10e7ac45a5019e9431cc195482d707485378', 'hex');
var walletA = Wallet.fromPrivateKey(key);
console.log(wallet.toV3String('password', "nccu"));
