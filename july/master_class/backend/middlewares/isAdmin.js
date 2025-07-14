const jwt = require("jsonwebtoken");

exports.isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.send({ status: false, message: "Token not provided" });
    }
    const decoded = jwt.verify(token, process.env.jwt_secret);
    if (decoded.user.role == "admin") {
      next();
    } else {
      return res.send({ status: false, message: "Invalid token " });
    }
  } catch (err) {
    console.log(err);
    res.send({ status: false, message: "Auth error", err });
  }
};
