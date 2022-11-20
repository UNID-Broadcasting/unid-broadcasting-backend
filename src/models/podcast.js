const { Schema, model } = require("mongoose");

const podcastSchema = new Schema({
    name: String,
    description: String,
    podcastNumber: Number,
    image: String,
    date: Date,
    duration: Number,
    category: String
});

podcastSchema.methods.toJSON = function () {
    const { __v, _id, ...podcast } = this.toObject();
    podcast.uid = _id;
    return podcast;
};

const Podcast = model("Podcast", podcastSchema);
module.exports = Podcast;