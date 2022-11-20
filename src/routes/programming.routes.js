const { Router } = require("express");
const {getProgramming, createProgramming} = require("../controllers/programming.controller")

const router = Router();

router.get("/", getProgramming);
router.post("/", createProgramming);

module.exports = router;