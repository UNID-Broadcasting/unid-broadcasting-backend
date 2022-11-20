const Podcast = require("../models/podcast");

const getPodcasts = async (req, res) => {
    try {
        const podcasts = await Podcast.find();
        res.status(200).json(podcasts);
    }
    catch (error) {
        res.status(500).json({
            message: "Error al obtener los podcasts",
            error
        });
    }
}

const createPodcast = async (req, res) => {
    try {
        const podcast = new Podcast(req.body);
        await podcast.save();
        res.status(200).json({
            message: "Podcast creado correctamente",
            podcast
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error al crear el podcast",
            error
        });
    }
}

module.exports = {
    getPodcasts,
    createPodcast
}