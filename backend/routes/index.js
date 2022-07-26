const express = require("express");

const ticketsRouter = require("./tickets.route");

const routerApi = (app) => {
    const router = express.Router();
    app.use("/api", router);
    
    router.use("/tickets", ticketsRouter);
};

module.exports = routerApi;
