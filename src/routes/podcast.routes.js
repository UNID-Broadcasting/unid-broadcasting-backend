const { Router } = require("express");
const {
  getPodcasts,
  createPodcast,
  updatePodcast,
  deletePodcast,
} = require("../controllers/podcast.controller");

const router = Router();

router.get("/", getPodcasts);
router.post("/", createPodcast);
router.put("/:id", updatePodcast);
router.delete("/:id", deletePodcast);

module.exports = router;
