const express = require("express");

const userRoutes = require("./user.routes");

const routes = express.Router();

routes.use("/user", userRoutes);


module.exports = routes;
