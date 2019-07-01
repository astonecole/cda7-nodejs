const http = require('http');

// ./node_modules/.bin/nodemon index.js

app = http.createServer((request, response) => {
    response.writeHead(200);

    let name = request.ur;
    console.log(name);

    response.end('<h1>Home Page</h1>');
});

app.listen(3000);
