const fs=require('fs');


const hello='Hello World';
console.log(hello);

//How to read stuff from file
const textIn = fs.readFileSync('input.txt','utf-8');
console.log(textIn);

//How to write stuff to another file
const textOut='This is what we know about the Node.js: $(textIn).\n Created on $(Date.now())';
fs.writeFileSync('output.txt',textOut);
console.log('File written');

