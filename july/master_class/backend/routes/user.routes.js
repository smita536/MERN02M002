const express = require("express");
const {
  Registration,
  Login,
  GetAllUser,
} = require("../controllers/user.controller");
const { isAdmin } = require("../middlewares/isAdmin");

const userRoutes = express.Router();

userRoutes.post("/registration", Registration);
userRoutes.post("/login", Login);
userRoutes.get("/", isAdmin, GetAllUser);

module.exports = userRoutes;
