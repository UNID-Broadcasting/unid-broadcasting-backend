/* Obtenemos la fecha de la zona horaria de México */
const getMexicoDate = () => {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  const mexicoDate = new Date(date.getTime() - offset * 60 * 1000);
  return mexicoDate;
};

const dayNames = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const dayName = dayNames[getMexicoDate().getDay()];
const day = getMexicoDate().getDate();
const monthName = monthNames[getMexicoDate().getMonth()];
const year = getMexicoDate().getFullYear();

const time = getMexicoDate().toLocaleTimeString();

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
