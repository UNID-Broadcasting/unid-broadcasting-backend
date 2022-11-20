const { Router } = require("express");
const {getProgramming} = require("../controllers/programming.controller")

const router = Router();

router.get("/", getProgramming);

module.exports = router;