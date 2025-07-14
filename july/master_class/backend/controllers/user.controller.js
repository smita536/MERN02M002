const User = require("../models/user.mode");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Registration = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.send({ status: false, message: "Please fill all the fields" });
    }

    const existUser = await User.find({ email });

    if (existUser?.length > 0) {
      return res.send({ status: false, message: "Already user exist" });
    }

    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        return res.send({
          status: false,
          message: "issue in hash password, register failed",
        });
      }

      const user = new User({
        fullName,
        email,
        password: hash,
      });
      const result = await user.save();
      res.send({ status: true, message: "Register successful", user: result });
    });
  } catch (err) {
    res.send({ status: false, message: "Register failed", error: err });
    console.log(err);
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.send({ status: false, message: "Please fill all the fields" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.send({ status: false, message: "User not found" });
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        return res.send({ status: false, message: "Wrong password" });
      }
      const secret = process.env.jwt_secret;
      const token = jwt.sign({ user }, secret, { expiresIn: "1h" });

      res.send({ status: true, message: "Login successful", token, user });
    });
  } catch (err) {
    res.send({ status: false, message: "Login failed" });
    console.log(err);
  }
};

exports.GetAllUser = async (req, res) => {
  try {
    const users = await User.find();

    if (users?.length > 0) {
      return res.send({
        status: true,
        message: "Users data get successful",
        users,
      });
    } else {
      return res.send({ status: true, message: "No users found" });
    }
  } catch (err) {
    console.log(err);
    res.send({ status: false, message: "Can't get users", err });
  }
};
