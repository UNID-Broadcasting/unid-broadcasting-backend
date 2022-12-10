const { Router } = require("express");
const { updateUser } = require("../controllers/user.controller");

const { validateJWT } = require("../middlewares/jwt.middleware");

const router = Router();

router.put("/:id", validateJWT, updateUser);

module.exports = router;
