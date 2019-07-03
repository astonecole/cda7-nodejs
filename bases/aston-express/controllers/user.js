// controllers/user.js

const UserService = require('../services/UserService');

exports.login = (req, res) => {

    UserService.all().then(
        data => {
            res.json(data);
        },
        err => {
            res.json(data);
        }
    );

    //res.json({});
}

exports.register = (req, res) => {
    const user = req.body;

    UserService.create(user)
        .then(
            data => {
                res.status(201).json(data);
            },
            err => {
                res.status(500).json(err);
            }
        );
}
