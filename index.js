const http = require("http");
const port = 3000;

// create a server object

const server = http.createServer( ( req, res ) => {
    res.write('Basic Node Server');
    res.end();
})

// run node index command and then run localhost:3000 in web browser to see server
server.listen(port);
