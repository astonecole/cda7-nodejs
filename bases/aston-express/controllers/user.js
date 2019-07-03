// controllers/user.js

const UserService = require('../services/UserService');
const jwtUtil = require('../utils/jwt');

exports.login = (req, res) => {
    UserService.all().then(
        data => {
            res.json(data);
        },
        err => {
            res.json(data);
        }
    );
}

exports.register = (req, res) => {
    const user = req.body;

    UserService.create(user)
        .then(
            data => {
                jwtUtil.generateToken(data, (err, token) => {
                    if (err) {
                        res.status(401).json(err);
                        return;
                    }
                    res.header('Authorization', 'Bearer ' + token);
                    res.status(204).json({});
                });
            },
            err => {
                res.status(500).json(err);
            }
        );
}
