const Joi = require("joi");

const id = Joi.string().uuid();
const concept = Joi.string().min(3).max(30);
const amount = Joi.number().min(0);
const type = Joi.any().valid("income", "expense");
const category = Joi.string().min(3).max(30);

const createTicketSchema = Joi.object({
    concept: concept.required(),
    amount: amount.required(),
    type: type.required(),
    category: category.required(),
});

const updateTicketSchema = Joi.object({
    concept: concept,
    amount: amount,
    category: category,
});

const getTicketSchema = Joi.object({
    id: id.required(),
});

const deleteProductSchema = Joi.object({
    id: id.required(),
});

module.exports = {
    createTicketSchema,
    updateTicketSchema,
    getTicketSchema,
    deleteProductSchema,
};
