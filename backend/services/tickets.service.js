const { v4: uuid } = require("uuid");
const boom = require("@hapi/boom");

class TicketsService {
    constructor() {
        this.tickets = [];
        this.generateTickets();
    }

    async generateTickets() {
        const limit = 100;
        for (let i = 0; i < limit; i++) {
            this.tickets.push({
                id: uuid(),
                title: `Ticket ${i}`,
                price: i,
                date: new Date(),
                type: "ticket",
                category: "category",
            });
        }
    }

    async create(ticket) {
        const newTicket = {
            id: uuid(),
            ...ticket,
        };
        this.tickets.push(newTicket);
        return newTicket;
    }

    async find() {
        return this.tickets;
    }

    async findOneByPk(id) {
        const ticket = this.tickets.find((ticket) => ticket.id === id);
        if (!ticket) {
            throw boom.notFound("Ticket not found");
        }
        return ticket;
    }

    async update(id, changes) {
        const index = this.tickets.findIndex((ticket) => ticket.id === id);
        if (index === -1) {
            throw boom.notFound("Ticket not found");
        }
        const ticket = this.tickets[index];
        if (changes.type) {
            throw boom.conflict("Ticket type cannot be changed");
        }

        this.tickets[index] = {
            ...ticket,
            ...changes,
        };
        return this.tickets[index];
    }

    async delete(id) {
        const index = this.tickets.findIndex((ticket) => ticket.id === id);
        if (index === -1) {
            throw boom.notFound("Ticket not found");
        }
        this.tickets.splice(index, 1);

        return id;
    }
}

module.exports = TicketsService;
