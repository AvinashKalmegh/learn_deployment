const UserModel = require("../db/userSchema");




const authenticator = async (req, res, next) => {
    
  try {
    const { email, password } = req.body;

    if (email && password) {
      let data = await UserModel.find({ email });

      if (data.length == 0) {
        res.send({ result: "User not Found" });
      }

      if (data) {
        if (data[0].password == password) {
          next();
        } else {
          res.send({ result: "Wrong Credentials" });
          
        }
      } else {
        res.send({ result: "User not found" });
        
      }
    } else {
      res.send({ result: "Please enter both the fields" });
      
    }
  } catch (error) {
    res.send(error);
  }
};


module.exports = authenticator;