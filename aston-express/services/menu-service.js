// services/MenuService.js

const MenuModel = require('../models/menu-model');

exports.all = () => MenuModel.findAll();
