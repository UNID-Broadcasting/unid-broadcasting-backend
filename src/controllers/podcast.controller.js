const Podcast = require("../models/podcast");

const getPodcasts = async (req, res) => {
  try {
    const podcasts = await Podcast.find();
    res.status(200).json(podcasts);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los podcasts",
      error,
    });
  }
};

const createPodcast = async (req, res) => {
  try {
    const podcast = new Podcast(req.body);
    await podcast.save();
    res.status(200).json({
      message: "Podcast creado correctamente",
      podcast,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el podcast",
      error,
    });
  }
};

const updatePodcast = async (req, res) => {
  try {
    const podcast = await Podcast.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Podcast actualizado correctamente",
      podcast,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el podcast",
      error,
    });
  }
};

const deletePodcast = async (req, res) => {
  try {
    await Podcast.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Podcast eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el podcast",
      error,
    });
  }
};

module.exports = {
  getPodcasts,
  createPodcast,
  updatePodcast,
  deletePodcast,
};
