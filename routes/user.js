const express = require("express");
const {register,login, userdetail, allUserDetails, updateDetails, updatebyid, deletebyid} = require("../controller/user");
const authenticator = require("../middlewares/authenticator");
const validator = require("../middlewares/validator")

const router = express.Router();

router.post("/register",register);
router.post("/login",authenticator,login);
router.get("/perticular",userdetail);
router.get("/allUserDetails",allUserDetails);
router.get("/update/:id",validator,updateDetails);
router.patch("/updatebyid/:id",updatebyid);
router.delete("/deletebyid/:id",validator,deletebyid)


module.exports = router;