//Importando as dependências//
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//Definindo a rede
//Bitcoin - rede principal - mainnet
//Testnet - rede de teste - testnet

const network = bitcoin.networks.testnet

//Derivação de carteira HD
const path = `m/49'/1'/0'/0`

//Criando o mnemoic para a seed (palavras de senha)
let mnenomic = bip39.generateMnemonic()


const seed = bip39.mnemonicToSeedSync(mnenomic)

//Criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network)

//Criando uma conta - par pvt-pub keys
let account = root.derivePath(path)

let btcAdress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address

console.log("Carteira gerada")
console.log("Endereço: ", btcAdress)
console.log("Chave privada: ", node.toWIF())
console.log("Seed", mnenomic)
