const http = require("http");
const url = require('url');
const port = 3000;

// create a server object
const server = http.createServer( ( req, res ) => {

    // provides URL object with each part of the address as properties
    let _url = url.parse(req.url, true);
    
    // to get url without '/'
    const urlPath = _url.pathname; 
    const urlPathExact = urlPath.substring( 1, urlPath.length );
    
    // handling for favicon
    if( urlPathExact === 'favicon.ico' ){
        res.writeHead(204, {'Content-Type': 'image/x-icon'} );
    }else {
        res.writeHead(200, {'Content-Type': 'text/html'} );
        res.write( "Web Series liked is "+ urlPathExact );
    }
    res.end();
});

//error handling
server.on('error', (err) => {
    console.log(err);
});
 
// run node index command and then run localhost:3000 in web browser to see server
server.listen(port);

