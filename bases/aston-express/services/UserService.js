// services/UserService.js

const UserModel = require('../models/UserModel');
const password = require('../utils/bcrypt-password');

exports.create = user => {
    // h = pass.hashSync('1234');
    // console.log(pass.verifySync('12345', h));

    return UserModel.create({
        firstname: user.firstname,
        email: user.email,
        name: user.name,
        password: user.password
    });
};

exports.all = () => UserModel.findAll();
