const { body, validationResult } = require("express-validator");
module.exports.registerValidations = [
  body("name").not().isEmpty().trim().withMessage("Name is Required"),
  body("email").not().isEmpty().trim().withMessage("Emial is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password Must be 6 Character Long"),
];
module.exports.register = (req, res) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    res.json(errors.array());
  } else {
    res.json("You Have Done");
  }
};
