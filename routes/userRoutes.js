const app = require("express");
const router = app.Router();

const { register } = require("../controllers/userController");

router.post("/register", register);
module.exports = router;
