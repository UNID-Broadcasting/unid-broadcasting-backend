const { Router } = require("express");
const {getVideoCasts, createVideoCast} = require("../controllers/videocast.controller")

const router = Router();

router.get("/", getVideoCasts);
router.post("/", createVideoCast);

module.exports = router;