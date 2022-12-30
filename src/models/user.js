const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true["El correo es obligatorio"],
    unique: true,
    match: [
      /^[\w-\.]+@red\.unid\.mx$/,
      "El correo debe de contener el dominio @red.unid.mx",
    ],
  },
  username: {
    type: String,
    required: true["El nombre de usuario es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: true["La contraseña es obligatoria"],
  },
  role: {
    type: String,
    default: "USER_REGISTERED",
  },
  active: {
    type: Boolean,
    default: true,
  },
  name: {
    type: String,
    required: true["El nombre es obligatorio"],
  },
  lastname: {
    type: String,
    required: true["El apellido es obligatorio"],
  },
  career: {
    type: String,
    required: true["Definir la carrera es obligatorio"],
  },
  imageProfileURL: {
    type: String,
    default:
      "https://firebasestorage.googleapis.com/v0/b/unid-dashboard-r-1672021883115.appspot.com/o/profile-images%2FUriel-UNID.png?alt=media&token=6a3f9d59-e3c3-406a-a33d-f4022f2b3a8a",
  },
});

userSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

const User = model("User", userSchema);
module.exports = User;
