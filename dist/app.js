"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_routes_1 = require("./routes/user.routes");
const app = express();
app.use(express.json());
app.use('/user', user_routes_1.default);
app.listen(3300, () => {
    console.log('Server rodando na porta 3001');
});
exports.default = app;
