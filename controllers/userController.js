const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
module.exports.registerValidations = [
  body("name").not().isEmpty().trim().withMessage("Name is Required"),
  body("email").not().isEmpty().trim().withMessage("Emial is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password Must be 6 Character Long"),
];
module.exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Email is Already Taken" }] });
    }
    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    try {
      const user = await User.create({
        name,
        email,
        password: hash,
      });
      const token = jwt.sign({ user }, process.env.SECRET, {
        expiresIn: "7d",
      });
      return res
        .status(200)
        .json({ msg: "Your Account Has Been Created", token });
    } catch (error) {
      return res.status(500).json({ errors: error });
    }
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
