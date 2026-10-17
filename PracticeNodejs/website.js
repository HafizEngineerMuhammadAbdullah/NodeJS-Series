// Import HTTP Module
const http = require("http");
const fs = require('fs');
//specify the port 
const port = process.env.PORT || '3000';

const server = http.createServer((req, res) => {
    // console.log(req);
    res.setHeader("Content-Type", 'text/html');//request html ke tor pr server ki gai hai
    console.log(req.url);

    // response given by http server that we have correspondingly  successful  response
    // 500 for server error
    // 404 is not found
    // Content-Type is what response has server send in response to the client
    if (req.url === '/') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else if (req.url === '/about') {
        res.statusCode = 200;//response is OK!
        res.end('<h1> This is Abdullah from the Client Side About Section</h1> <p>Hey this is the way to rock the world!</p>');
    } else if (req.url === '/contact') {
        res.statusCode = 200;//response is OK!
        res.end('<h1> This is Abdullah from the Client Side Contact</h1> <p>Hey this is the way to rock the world!</p>');
    }
    else if (req.url === '/index') {

        res.statusCode = 200;//response is OK!
        res.end('<h1> This is Abdullah from the Client Side</h1> <p>Hey this is the way to rock the world!</p>');

    }
    else {
        //res.abdul(); // just wanted to crash the server
        res.statusCode = 404;//response is OK!
        res.end('<h1> Not Found</h1> <p>Hey this page is not found!</p>');
    }
});



server.listen(port, () => console.log(`Server is listening on port ${port}`));