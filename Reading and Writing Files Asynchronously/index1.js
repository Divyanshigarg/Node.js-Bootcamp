const fs=require('fs');

//Blocking,Synchronous way
const textIn = fs.readFileSync('input.txt','utf-8');
console.log(textIn);
const textOut='This is what we know about the Node.js: $(textIn).\n Created on $(Date.now())';
fs.writeFileSync('output.txt',textOut);
console.log('File written');

//Non-blocking,asynchronous way

fs.readFile('start.txt','utf-8',(err, data1) => {
   if(err) return console.log('ERROR');
    fs.readFile(`${data1}.txt`,'utf-8',(err,data2) => {
     console.log(data2);
     fs.readFile('append.txt','utf-8',(err,data3)=>{
      console.log(data3);

      //for writing the file
      fs.writeFile('final.txt',`${data2}\n${data3}`,'utf-8',err=>{
console.log('Your file has been written');
      })
     });
   });
});
console.log('Will read file!');
