const User = require("../models/user");
const bcrypt = require("bcrypt");
const { generateJWT } = require("../helpers/jwt.helper");

const registerUser = async (req, res) => {
  try {
    const { email, username, password, role, active, name, lastname, career } =
      req.body;

    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(400).json({
        ok: false,
        message:
          "El correo ya está registrado, si se trata de un error, por favor contacte al administrador del sistema",
      });
    }

    const usernameExists = await User.findOne({
      username,
    });

    if (usernameExists) {
      return res.status(400).json({
        ok: false,
        message:
          "El nombre de usuario ya está registrado, si se trata de un error, por favor contacte al administrador del sistema",
      });
    }

    const user = new User(req.body);

    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    const token = await generateJWT(user.id);

    const userFound = {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
      active: user.active,
      name: user.name,
      lastname: user.lastname,
      career: user.career,
      profileImage: user.imageProfileURL,
    };

    res.status(201).json({
      ok: true,
      message: "Usuario registrado correctamente",
      data: userFound,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error al registrar el usuario",
      error,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      username,
    });

    if (!user) {
      return res.status(400).json({
        ok: false,
        message: "El usuario no existe",
      });
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        message: "La contraseña no es válida",
      });
    }

    const token = await generateJWT(user.id);

    const userFound = {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
      active: user.active,
      name: user.name,
      lastname: user.lastname,
      career: user.career,
      profileImage: user.imageProfileURL,
    };

    res.status(200).json({
      ok: true,
      message: "Usuario logueado correctamente",
      data: userFound,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error al loguear el usuario",
      error,
    });
  }
};

const verifyUser = async (req, res) => {
  try {
    const { user } = req;

    const token = await generateJWT(user.id);

    const userFound = {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
      active: user.active,
      name: user.name,
      lastname: user.lastname,
      career: user.career,
      profileImage: user.imageProfileURL,
    };

    res.status(200).json({
      ok: true,
      message: "Usuario verificado correctamente",
      data: userFound,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error al verificar el usuario",
      error,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  verifyUser,
};
