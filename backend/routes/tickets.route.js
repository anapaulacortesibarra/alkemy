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

// Get all tickets
router.get("/", async (req, res, next) => {
    const { user } = req.query;
    if (user) {
        try {
            const tickets = await service.findByUser(user);
            res.json({ tickets });
        } catch (err) {
            next(err);
        }
    } else {
        try {
            const tickets = await service.find();
            res.json({ tickets });
        } catch (error) {
            next(error);
        }
    }
});

// Get ticket by id
router.get(
    "/:id",
    validatorHandler(getTicketSchema, "params"),
    async (req, res, next) => {
        try {
            const id = req.params.id;
            const ticket = await service.findOne(id);
            res.json({ ticket });
        } catch (error) {
            next(error);
        }
    }
);

// Create a new ticket
router.post(
    "/",
    validatorHandler(createTicketSchema, "body"),
    async (req, res, next) => {
        try {
            const body = req.body;
            const ticket = await service.create(body);
            res.status(201).json({
                message: "Create ticket",
                ticket,
            });
        } catch (error) {
            next(error);
        }
    }
);

// Update a ticket
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

// Delete a ticket
router.delete(
    "/:id",
    validatorHandler(deleteTicketSchema, "params"),
    async (req, res, next) => {
        try {
            const id = req.params.id;
            const rta = await service.delete(id);
            res.json({ message: `Ticket deleted` });
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;
