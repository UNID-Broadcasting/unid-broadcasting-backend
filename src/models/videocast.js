const { Schema, model } = require("mongoose");

const videoCastSchema = new Schema({
    name: String,
    description: String,
    author: String,
    videoCastNumber: Number,
    image: String,
    date: Date,
    duration: Number,
    category: String,
    url: String
});

videoCastSchema.methods.toJSON = function () {
    const { __v, _id, ...videoCast } = this.toObject();
    videoCast.uid = _id;
    return videoCast;
};

const VideoCast = model("VideoCast", videoCastSchema);
module.exports = VideoCast;