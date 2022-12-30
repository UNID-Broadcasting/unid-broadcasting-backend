const User = require("../models/user");
const bcrypt = require("bcrypt");

const getUserById = (req, res) => {
  const { id } = req.params;

  User.findById(id, (err, user) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: "Error inesperado",
      });
    }

    if (!user) {
      return res.status(404).json({
        ok: false,
        message: "Usuario no encontrado",
      });
    }

    res.status(200).json({
      ok: true,
      message: "Usuario encontrado",
      data: user,
    });
  });
};

const updateUser = async (req, res) => {
  try {
    const {
      email,
      username,
      password,
      role,
      active,
      name,
      lastname,
      career,
      imageProfileURL,
    } = req.body;
    const { id } = req.params;
    const { user } = req;

    if (user.id !== id) {
      return res.status(401).json({
        ok: false,
        message: "No tienes permisos para actualizar este usuario",
      });
    }

    const emailExists = await User.findOne({ email });

    if (emailExists && emailExists.id !== user.id) {
      return res.status(400).json({
        ok: false,
        message: "El correo ya está registrado",
      });
    }

    const usernameExists = await User.findOne({ username });

    if (usernameExists && usernameExists.id !== user.id) {
      return res.status(400).json({
        ok: false,
        message: "El nombre de usuario ya está registrado",
      });
    }

    const userFound = {
      email,
      username,
      password,
      role,
      active,
      name,
      lastname,
      career,
      imageProfileURL,
    };

    if (password) {
      const salt = bcrypt.genSaltSync();
      userFound.password = bcrypt.hashSync(password, salt);
    }

    const userUpdated = await User.findByIdAndUpdate(id, userFound, {
      new: true,
    });

    const userUpdatedData = {
      id: userUpdated.id,
      email: userUpdated.email,
      username: userUpdated.username,
      role: userUpdated.role,
      active: userUpdated.active,
      name: userUpdated.name,
      lastname: userUpdated.lastname,
      career: userUpdated.career,
      imageProfileURL: userUpdated.imageProfileURL,
    };

    res.status(200).json({
      ok: true,
      message: "Usuario actualizado correctamente",
      user: userUpdatedData,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error inesperado",
    });
  }
};

module.exports = {
  getUserById,
  updateUser,
};
