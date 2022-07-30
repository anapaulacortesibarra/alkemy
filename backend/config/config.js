require("dotenv").config();

const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 8080,
    db: {
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 5432,
        user: process.env.DB_USER || "alkemy-user",
        password: process.env.DB_PASSWORD || "alkemy-password",
        database: process.env.DB_NAME || "alkemy_challenge",
    },
};

module.exports = { config };
