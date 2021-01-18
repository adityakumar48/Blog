const app = require("express");
const router = app.Router();

const {
  register,
  registerValidations,
  login,
  loginValidation,
} = require("../controllers/userController");

router.post("/register", registerValidations, register);
router.post("./login", loginValidation, login);
module.exports = router;
