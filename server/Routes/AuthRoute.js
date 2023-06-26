const { Signup } = require("../Controllers/AuthController");
const router = require("express").Router();
const {userVerification} = require("../Middlewares/AuthMiddleware");

router.post("/signup", Signup);
router.post('/',userVerification)


module.exports = router;