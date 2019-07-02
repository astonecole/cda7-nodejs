// services/MenuService.js

const MenuModel = require('../models/MenuModel');

exports.all = () => MenuModel.findAll();
