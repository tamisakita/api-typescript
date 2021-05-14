"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUser_1 = require("../controllers/createUser");
const createUserController = new createUser_1.default();
const router = express_1.Router();
router.post('/', (req, res) => {
});
exports.default = router;
