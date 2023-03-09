var http = require('http');
http.createServer(function (req, res) {  
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end('Hello World!');
}).listen(80, () => {console.log("Server is running at port 80")});
