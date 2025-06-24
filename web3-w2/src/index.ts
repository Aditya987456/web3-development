//---------***********************   creating public and private keys.     ***********************--------------


// # Using  algo --> EdDSA
// #1: using ED25519 -this is before sol, eth , this is not only for the blockchain but also for the any other task.

import * as ed from "@noble/ed25519";

// async function main(){

//     //1: generate a random private key.
//     const privateKey= ed.utils.randomPrivateKey();4
//     //console.log(privateKey)

//     //generate public key-: Computing the public key from the private key involves elliptic curve scalar multiplication, which is computationally expensive.
//     const publicKey = await ed.getPublicKeyAsync(privateKey)
//    // console.log(publicKey)

//     //2: convert the message into UInt8Array - 
//     const msg = new TextEncoder().encode('hello ji')


//     //3: Sign the message- using privatekey
//     const signature = await ed.signAsync(msg, privateKey)


//     //4: Verify the message  - using the public key.
//     const verifyMsg=await ed.verifyAsync(signature, msg, publicKey) 


//     //output--
//     console.log(verifyMsg);

// }
// main();




console.log('----------------------------------------------------------------------------')

// // // #2: using @solana/web3 -->  for solana.
// import { Keypair } from '@solana/web3.js' 

// //nacl lib for signing and verifying in messages in crpto,,,
// import nacl from 'tweetnacl'


// //-step1:generate public and private keys.
// const keyspairs=Keypair.generate();

// const pubKey=keyspairs.publicKey.toBytes();
// const secKey=keyspairs.secretKey;

// //**note - here secret key has public key also . and we convert in base58 which is more human readable formate.
// console.log('solana public key =' + pubKey)
// console.log('solana secret key =' + secKey)


// //-step:2 converting the messages into UInt8Array
// const msg = new TextEncoder().encode('hello sirjiiii')


// //-step:3 signing the message.
// const signature = nacl.sign.detached(msg, secKey)

// //-step:4 veryfing the msg.
// const isValid = nacl.sign.detached.verify( msg, signature, pubKey)


// console.log(isValid);







//--------- generating Mnemonics... used in single seed - HD wallets.
