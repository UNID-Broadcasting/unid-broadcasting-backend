const { Schema, model } = require("mongoose");

const teamSchema = new Schema({
  name: String,
  lastName: String,
  position: String,
  career: String,
  image: String,
  description: String,
});

teamSchema.methods.toJSON = function () {
  const { __v, _id, ...team } = this.toObject();
  team.uid = _id;
  return team;
};

const Team = model("Team", teamSchema);
module.exports = Team;
