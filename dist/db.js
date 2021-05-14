"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConn = new sequelize_1.Sequelize('mysql://avanade:password@localhost:3306/avanade');
exports.default = dbConn;
