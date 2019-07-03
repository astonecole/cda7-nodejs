// services/UserService.js

const UserModel = require('../models/UserModel');

exports.all = () => UserModel.findAll();
