const express = require("express");

const ticketsRouter = require("./tickets.route");
// const usersRouter = require('./users.route');

const routerApi = (app) => {
    const router = express.Router();
    app.use("/api", router);
    
    router.use("/tickets", ticketsRouter);
    // router.use("/users", usersRouter);
};

module.exports = routerApi;
