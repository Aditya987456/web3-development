 const crypto=require('crypto')
// const input='100xdevs'

// const hash=crypto.createHash('sha256').update(input).digest('hex')

// console.log(hash);

//-----------assignment----------------
function FindHashWithPrefix(prefix) {
    let input=0;

    while(1){
        //if input string have some prefix..
        let inputString = "100xdevs" + input.toString();
        //let inputString=input.toString();
        let hash=crypto.createHash('sha256').update(inputString).digest('hex')
        //checking that starting with 0000 or not.
        if(hash.startsWith(prefix)){
            return {input:inputString, hash:hash};
        }
        input++;
    }  
}

const result=FindHashWithPrefix('00000');
console.log(`inputvalue = ${result.input}`)
console.log(`Hashvalue = ${result.hash}`)
