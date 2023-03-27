const UserModel = require("../db/userSchema");

const register = async (req, res) => {
  try {
    const { email } = req.body;
    let data = await UserModel.find({ email });
    if (data.length > 0) {
      res.send({ result: "User already registered" });
    } else {
      let result = UserModel(req.body);
      result = await result.save();
      res.send(result);
    }
  } catch (error) {
    res.send(error);
  }
};

const login =async (req, res) => {
    const {email} = req.body;
    let data = await UserModel.find({email})
 console.log(data);

    res.send(data)

};

const userdetail = async (req, res) => {
  try {
    const { q } = req.query;
    console.log(q);
    let data = await UserModel.find({ email: q });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

const allUserDetails = async (req, res) => {
  try {
    let data = await UserModel.find();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

const updateDetails = async (req, res) => {
  try {
    // console.log(req.params.id);
    let data = await UserModel.find({ _id: req.params.id });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

const updatebyid = async (req, res) => {
  try {
    // let data = await UserModel.deleteOne({_id:req.params.id});
    let result = await UserModel.findByIdAndUpdate(
      (_id = req.params.id),
      req.body
    );
    result = await result.save();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

const deletebyid = async (req, res) => {
  try {
    let result = await UserModel.deleteOne({ _id: req.params.id });

    res.send({ result: "Successfully Deleted" });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  register,
  login,
  userdetail,
  allUserDetails,
  updateDetails,
  updatebyid,
  deletebyid,
};
