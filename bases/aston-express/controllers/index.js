// controllers/index.js

// Routes by default

exports.hello = (req, res) => {
    res.send({
        message: 'Hello guys !'
    });
}

exports.test = (req, res) => {
    res.send({
        message: 'Test...'
    });
};
