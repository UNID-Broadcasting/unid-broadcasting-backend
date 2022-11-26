const { Router } = require("express");
const { today } = require("../controllers/date");

const router = Router();

router.get("/", today);

module.exports = router;
