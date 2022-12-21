const { Router } = require("express");
const {
  verifyUser,
  loginUser,
  registerUser,
} = require("../controllers/auth.controller");
const { validateJWT } = require("../middlewares/jwt.middleware");

const router = Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/", validateJWT, verifyUser);

module.exports = router;
