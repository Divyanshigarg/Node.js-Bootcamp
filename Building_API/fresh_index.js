const fs = require("fs");
const http = require("http");
const url = require("url");
//SERVER
//API is a service from which we can request some data.
//Here we have a data folder in which we have the json file
//where json is a very simple text format that looks a lot like javascript Object,we can have big arrays
//so bascially ,this data here is what our API will send to the client requested.

const data = fs.readFileSync(
  `${__dirname}/dev-data/data.json`,
  `utf-8`,
  (err, data) => {
    const dataObj = JSON.parse(data);
  }
);
//read the data from the file data.json ,than parse into javascript and than send back this result to the client.
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview");
  } else if (pathName === "/product") {
    res.end("This is the product");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});
server.listen(4000, "127.0.0.1", () => {
  console.log("Listening to requests on port 4000");
});
