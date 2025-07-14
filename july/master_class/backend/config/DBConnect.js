const mongoose = require("mongoose");

const DBConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.mongo_url);
    console.log(`Database connected host :- ${connect.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = DBConnect;
