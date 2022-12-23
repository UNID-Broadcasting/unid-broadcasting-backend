const { Router } = require("express");
const { getUserById, updateUser } = require("../controllers/user.controller");

const { validateJWT } = require("../middlewares/jwt.middleware");

const router = Router();

router.get("/:id", validateJWT, getUserById);
router.put("/:id", validateJWT, updateUser);

module.exports = router;
