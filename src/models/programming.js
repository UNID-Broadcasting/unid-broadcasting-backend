const { Schema, model } = require("mongoose");

const programmingSchema = new Schema({
  name: String,
  description: String,
  image: String,
  date: Date,
  time: String,
  category: String
});

programmingSchema.methods.toJSON = function () {
  const { __v, _id, ...programming } = this.toObject();
  programming.uid = _id;
  return programming;
};

const Programming = model("Programming", programmingSchema);
module.exports = Programming;