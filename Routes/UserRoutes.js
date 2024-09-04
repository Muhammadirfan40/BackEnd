const express = require("express");
const Router = express.Router();
const { userLogin , userRegister} = require("../Controller/User.Controller");



Router.post("/login", userLogin);
Router.post("/register", userRegister);



module.exports = Router;