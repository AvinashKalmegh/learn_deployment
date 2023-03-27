const UserModel = require("../db/userSchema");

const validator = async (req, res, next) => {
  try {
    let resultquery = req.query.q;
    let data = await UserModel.find({ email: resultquery });

    if (data[0].firstname == "admin") {
      next();
    } else {
      res.send({ result: "You are not admin" });
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = validator;
