const http = require("http");

const server = http.createServer(function(req, res) {
    if (req.url === "/blog") {
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Blog Server</h1><p>This is a basic blog server.</p>");
        return;
    }

    res.end("Blog server is running");
});

server.listen(7777);
