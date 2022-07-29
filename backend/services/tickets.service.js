const boom = require("@hapi/boom");

const { models } = require("../libs/sequelize");

class TicketsService {
    constructor() {}

    async create(ticket) {
        const newTicket = await models.Ticket.create(ticket);
        return newTicket;
    }

    async find() {
        const result = await models.Ticket.findAll();
        return result;
    }

    async findByUser(user) {
        const result = await models.Ticket.findAll({
            where: {
                user: user,
            },
        });
        return result;
    }

    async findOne(id) {
        const ticket = await models.Ticket.findByPk(id);
        if (!ticket) {
            throw boom.notFound("Ticket not found");
        }
        return ticket;
    }

    async update(id, changes) {
        const ticket = await this.findOne(id);
        if (changes.type) {
            throw boom.conflict("Ticket type cannot be changed");
        }
        const updatedTicket = await ticket.update(changes);
        return updatedTicket;
    }

    async delete(id) {
        const ticket = await this.findOne(id);
        await ticket.destroy();
        return ticket;
    }
}

module.exports = TicketsService;
