// Import HTTP Module
const http = require("http");
//specify the port 
const port = process.env.PORT || '3000';

const server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url);
    
    // response given by http server that we have correspondingly  successful  response
    res.statusCode = 200;//response is OK!
    // 500 for server error
    // 404 is not found
    // Content-Type is what response has server send in response to the client
    res.setHeader("Content-Type", 'text/html');//request html ke tor pr server ki gai hai
    res.end('<h1> This is Abdullah from the Client Side</h1> <p>Hey this is the way to rock the world!</p>');
});



server.listen(port, () => console.log(`Server is listening on port ${port}`));