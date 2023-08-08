//get libraries needed
let http = require("http");
const fs = require('fs');
let hostName = '127.0.0.1';
let port = 3001;

//create a server
let server = http.createServer(
    function(req,res) {
        fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader('Content-Type','text/html');
            res.writeHead(200);
            //res.write();
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
    }
);

//make the server listen at  a port
server.listen(port,hostName,() => {console.log(`Server is listening at port ${port}`)});