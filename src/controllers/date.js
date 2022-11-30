const moment = require("moment-timezone");
const timezone = "America/Mexico_City";

const dayName = moment().tz(timezone).locale("es").format("dddd");
const day = moment().tz(timezone).format("DD");
const monthName = moment().tz(timezone).locale("es").format("MMMM");
const year = moment().tz(timezone).format("YYYY");
const time = moment().tz(timezone).format("HH:mm:ss");

const dayNameUpper = dayName.charAt(0).toUpperCase() + dayName.slice(1);
const monthNameUpper = monthName.charAt(0).toUpperCase() + monthName.slice(1);

const today = (req, res) => {
  res.json({
    dayName: dayNameUpper,
    day,
    monthName: monthNameUpper,
    year,
    time,
  });
};

module.exports = { today };
