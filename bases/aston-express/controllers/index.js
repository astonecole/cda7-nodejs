// controllers/index.js
// Routes by default

const MenuService = require('../services/MenuService');

exports.hello = (req, res) => {
    res.send({
        message: 'Hello guys !'
    });
}

exports.home = (req, res) => {
    MenuService.all().then(
        data => {
            res.json(data);
        },
        err => {
            res.json(err);
        }
    );
};
