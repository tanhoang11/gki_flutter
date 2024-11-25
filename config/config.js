const mongoose = require("mongoose");
require("dotenv").config(); // Nạp biến môi trường
const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        // Ket noi voi mongodb
        await mongoose.connect(
            "mongodb+srv://hoang100333:se89YiPiRT.NiGy@cluster0.8ki1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
            
        );
        console.log("Connect successfully!!!");
    } catch (error) {
        console.log("Connect failure!!!", error);
        process.exit(1);
    }
};
module.exports = connectDB;