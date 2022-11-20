const mongoose = require('mongoose');

const dbConnection = () => {
    try {
        mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database online");
    } catch (error) {
        console.log(error);
        throw new Error("Error to connect to database");
    }
};

module.exports = {
    dbConnection
};