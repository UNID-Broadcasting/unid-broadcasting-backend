const { Router } = require("express");
const {
  getVideoCasts,
  createVideoCast,
  updateVideoCast,
  deleteVideoCast,
} = require("../controllers/videocast.controller");

const router = Router();

router.get("/", getVideoCasts);
router.post("/", createVideoCast);
router.put("/:id", updateVideoCast);
router.delete("/:id", deleteVideoCast);

module.exports = router;
