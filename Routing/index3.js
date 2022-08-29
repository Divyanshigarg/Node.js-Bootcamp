const fs=require('fs');
const http=require('http');
const url=require('url');


//SERVER

const server = http.createServer((req,res)=>{
    console.log(req.url);
    
    const pathName=req.url;
    if(pathName === '/' || pathName==='/overview'){
    res.end('This is the overview');
    }else if(pathName === '/product'){
    res.end('This is the product');
    }
    else{
        res.writeHead(404,{
              'Content-type':'text/html',              //http header is a piece of information about the response 
              'my-own-header':'hello-world'              //that we are sending back.
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(2000,'127.0.0.1', () => {
    console.log('Listening to requests on port 3000');
});