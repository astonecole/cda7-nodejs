const express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send('<h1>ExpressJS en force</h1>');
});

app.listen(8000);
