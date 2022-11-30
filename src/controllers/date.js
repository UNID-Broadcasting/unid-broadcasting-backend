/* Vamos a declarar en una variable la zona horaria y apartir de allí vamos a recuperar el nombre del día, día, nombre del mes, año y hora */
const moment = require("moment-timezone");
const timezone = "America/Mexico_City";

const dayName = moment().tz(timezone).format("dddd");
const day = moment().tz(timezone).format("DD");
const monthName = moment().tz(timezone).format("MMMM");
const year = moment().tz(timezone).format("YYYY");
const time = moment().tz(timezone).format("HH:mm:ss");

const today = (req, res) => {
  res.json({
    dayName,
    day,
    monthName,
    year,
    time,
  });
};

module.exports = { today };
