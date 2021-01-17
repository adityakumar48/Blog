const app = require("express");
const router = app.Router();

const {
  register,
  registerValidations,
} = require("../controllers/userController");

router.post("/register", registerValidations, register);
module.exports = router;
