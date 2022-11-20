const Programming = require("../models/programming");

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

const createProgramming = async (req, res) => {
    try {
        const programming = new Programming(req.body);
        await programming.save();
        res.status(200).json({
            message: "Programación creada correctamente",
            programming
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error al crear la programación",
            error
        });
    }
}

module.exports = {
    getProgramming,
    createProgramming
}