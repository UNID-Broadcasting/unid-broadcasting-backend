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

app.use("/api/programming", require("./src/routes/programming.routes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});