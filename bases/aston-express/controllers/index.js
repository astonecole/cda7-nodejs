// controllers/index.js
// Routes by default

const MenuService = require('../services/MenuService');

exports.hello = (req, res) => {
    res.send({
        message: 'Hello guys !'
    });
}

exports.test = (req, res) => {
    MenuService.all().then(
        data => {
            res.json(data);
        },
        err => {
            res.json(err);
        }
    );

    // res.send({
    //     message: 'Test...'
    // });
};
