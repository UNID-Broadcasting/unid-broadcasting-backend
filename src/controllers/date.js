const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

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

const dayName = dayNames[date.getDay()];
const monthName = monthNames[date.getMonth()];
const time = date.toLocaleTimeString();

const today = (req, res) => {
  res.status(200).json({
    message: "Fecha actual",
    date: `${dayName} ${day} de ${monthName} de ${year}`,
    time: `${time}`,
  });
};

module.exports = { today };
