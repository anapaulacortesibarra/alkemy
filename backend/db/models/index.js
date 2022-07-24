const { Ticket, TicketSchema } = require("./ticket.model");
const { User, UserSchema } = require("./user.model");

function setupModels(sequelize) {
    Ticket.init(TicketSchema, Ticket.config(sequelize));
    User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;
