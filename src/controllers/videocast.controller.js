const VideoCast = require("../models/videocast");

const getVideoCasts = async (req, res) => {
  try {
    const videoCasts = await VideoCast.find();
    res.status(200).json(videoCasts);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los videoCasts",
      error,
    });
  }
};

const createVideoCast = async (req, res) => {
  try {
    const videoCast = new VideoCast(req.body);
    await videoCast.save();
    res.status(200).json({
      message: "VideoCast creado correctamente",
      videoCast,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el videoCast",
      error,
    });
  }
};

const updateVideoCast = async (req, res) => {
  try {
    const videoCast = await VideoCast.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: "VideoCast actualizado correctamente",
      videoCast,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el videoCast",
      error,
    });
  }
};

const deleteVideoCast = async (req, res) => {
  try {
    await VideoCast.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "VideoCast eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el videoCast",
      error,
    });
  }
};

module.exports = {
  getVideoCasts,
  createVideoCast,
  updateVideoCast,
  deleteVideoCast,
};
