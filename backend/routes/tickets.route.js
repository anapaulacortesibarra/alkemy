const express = require("express");
const TicketsService = require("../services/tickets.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
    createTicketSchema,
    updateTicketSchema,
    getTicketSchema,
    deleteTicketSchema,
} = require("../schemas/tickets.schema");

const router = express.Router();
const service = new TicketsService();

router.get("/", async (req, res) => {
    const tickets = await service.find();
    res.json({ message: "Tickets", tickets });
});

router.get(
    "/:id",
    validatorHandler(getTicketSchema, "params"),
    async (req, res, next) => {
        try {
            const id = req.params.id;
            const ticket = await service.findOneByPk(id);
            res.json({ ticket });
        } catch (error) {
            next(error);
        }
    }
);

router.post(
    "/",
    validatorHandler(createTicketSchema, "body"),
    async (req, res) => {
        const body = req.body;
        const ticket = await service.create(body);
        res.status(201).json({
            message: "Create ticket",
            ticket,
        });
    }
);

router.patch(
    "/:id",
    validatorHandler(getTicketSchema, "params"),
    validatorHandler(updateTicketSchema, "body"),
    async (req, res, next) => {
        try {
            const id = req.params.id;
            const body = req.body;
            const ticket = await service.update(id, body);
            res.json({ message: "updated", id, ticket });
        } catch (error) {
            next(error);
        }
    }
);

router.delete(
    "/:id",
    validatorHandler(deleteTicketSchema, "params"),
    async (req, res) => {
        const id = req.params.id;
        const rta = await service.delete(id);
        res.json({ rta });
    }
);

module.exports = router;
