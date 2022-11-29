const { Router } = require("express");
const {
  getTeamsMembers,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} = require("../controllers/team.controller");

const router = Router();

router.get("/", getTeamsMembers);
router.post("/", createTeamMember);
router.put("/:id", updateTeamMember);
router.delete("/:id", deleteTeamMember);

module.exports = router;
