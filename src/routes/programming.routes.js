const { Router } = require("express");
const {
  getProgramming,
  createProgramming,
  updateProgramming,
  deleteProgramming,
} = require("../controllers/programming.controller");

const router = Router();

router.get("/", getProgramming);
router.post("/", createProgramming);
router.put("/:id", updateProgramming);
router.delete("/:id", deleteProgramming);

module.exports = router;
