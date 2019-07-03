// services/UserService.js

const UserModel = require('../models/UserModel');
const password = require('../utils/bcrypt-password');

exports.create = user => {
    const pass = password.hashSync(user.password);

    return UserModel.create({
        status: 0,
        firstname: user.firstname,
        email: user.email,
        name: user.name,
        password: pass
    });
};

exports.all = () => UserModel.findAll();
