const VideoCast = require("../models/videocast");

const getVideoCasts = async (req, res) => {
    try {
        const videoCasts = await VideoCast.find();
        res.status(200).json(videoCasts);
    }
    catch (error) {
        res.status(500).json({
            message: "Error al obtener los videoCasts",
            error
        });
    }
}

const createVideoCast = async (req, res) => {
    try {
        const videoCast = new VideoCast(req.body);
        await videoCast.save();
        res.status(200).json({
            message: "VideoCast creado correctamente",
            videoCast
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error al crear el videoCast",
            error
        });
    }
}

module.exports = {
    getVideoCasts,
    createVideoCast
}