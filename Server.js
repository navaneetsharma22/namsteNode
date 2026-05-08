const http = require("http");

const server = http.createServer(function(req,res){
    if(req.url === "/getsecretData"){
        res.end("There is no secret Data")
    }
    res.end("Hello Navaneet")
})

server.listen(7777);
