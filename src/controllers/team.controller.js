const Team = require("../models/team");

const getTeamsMembers = async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los equipos",
      error,
    });
  }
};

const createTeamMember = async (req, res) => {
  try {
    const team = new Team(req.body);
    await team.save();
    res.status(200).json({
      message: "Integrante creado correctamente",
      team,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el integrante",
      error,
    });
  }
};

const updateTeamMember = async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Integrante actualizado correctamente",
      team,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el integrante",
      error,
    });
  }
};

const deleteTeamMember = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Integrante eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el integrante",
      error,
    });
  }
};

module.exports = {
  getTeamsMembers,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
};
