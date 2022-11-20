const Programming = require("../models/programming");

 /* Mi colección se llama programming */
const getProgramming = async (req, res) => {
    try {
        const programming = await Programming.find();
        res.status(200).json(programming);
    }
    catch (error) {
        res.status(500).json({
            message: "Error al obtener la programación",
            error
        });
    }
}

module.exports = {
    getProgramming
}