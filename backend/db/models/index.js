const { Ticket, TicketSchema } = require("./ticket.model");

function setupModels(sequelize) {
    Ticket.init(TicketSchema, Ticket.config(sequelize));
}

module.exports = setupModels;
