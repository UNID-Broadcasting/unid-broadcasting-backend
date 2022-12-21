const jwt = require("jsonwebtoken");
const User = require("../models/user");

const validateJWT = async (req, res, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      ok: false,
      message: "No hay token en la petición",
    });
  }
  try {
    const { uid } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(uid);

    if (!user) {
      return res.status(401).json({
        ok: false,
        message: "Token no válido",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      message: "Token no válido",
    });
  }
};

module.exports = {
  validateJWT,
};
