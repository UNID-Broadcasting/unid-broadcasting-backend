const { Router } = require("express");
const {getPodcasts, createPodcast} = require("../controllers/podcast.controller")

const router = Router();

router.get("/", getPodcasts);
router.post("/", createPodcast);

module.exports = router;