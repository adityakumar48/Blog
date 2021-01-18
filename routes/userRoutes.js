const app = require("express");
const router = app.Router();

const {
  register,
  registerValidations,
  login,
  loginValidations,
} = require("../controllers/userController");

router.post("/register", registerValidations, register);
router.post("./login", loginValidations, login);
module.exports = router;
