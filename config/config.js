require("dotenv").config();
const config = {
    port: process.env.PORT || 3000,
    jwtSecret : process.env.JWT_SECRET ,
    mongoUri: process.env.DB_URL || "mongodb://localhost:27017/project1",

};

module.exports = config;