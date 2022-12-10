const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./src/database/config");

// Database
dbConnection();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (_, res) => {
  res.status(200).json({
    message: "UNID - Radio y TV",
    version: "1.0.0",
    copyrigth: "UNID Acapulco",
  });
});

//Rutas de la API
app.use("/api/programming", require("./src/routes/programming.routes"));
app.use("/api/podcast", require("./src/routes/podcast.routes"));
app.use("/api/videocast", require("./src/routes/videocast.routes"));
app.use("/api/date", require("./src/routes/date.routes"));
app.use("/api/team", require("./src/routes/team.routes"));
app.use("/api/auth", require("./src/routes/auth.routes"));
app.use("/api/user", require("./src/routes/user.routes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
