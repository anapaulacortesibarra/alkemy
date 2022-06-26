const express = require("express");
const TicketsService = require("../services/tickets.service");

const router = express.Router();
const service = new TicketsService();

router.get("/", async (req, res) => {
    const tickets = await service.find();
    res.json({ message: "Tickets", tickets });
});

router.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const ticket = await service.findOneByPk(id);
        res.json({ ticket });
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res) => {
    const body = req.body;
    const ticket = await service.create(body);
    res.status(201).json({
        message: "Create ticket",
        ticket,
    });
});

router.patch("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const ticket = await service.update(id, body);
        res.json({ message: "updated", id, ticket });
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const rta = await service.delete(id);
    res.json({ rta });
});

module.exports = router;
