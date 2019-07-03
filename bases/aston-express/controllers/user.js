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
    console.log(user);
    res.status(201).json(user);
}
