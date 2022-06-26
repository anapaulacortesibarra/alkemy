const Joi = require("joi");

const id = Joi.string().uuid();
const title = Joi.string().min(3).max(30);
const price = Joi.number().min(0);
const date = Joi.date();
const type = Joi.any().valid("income", "expense");
const category = Joi.string().min(3).max(30);

const createTicketSchema = Joi.object({
    title: title.required(),
    price: price.required(),
    date: date.required(),
    type: type.required(),
    category: category.required(),
});

const updateTicketSchema = Joi.object({
    title: title,
    price: price,
    category: category,
});

const getTicketSchema = Joi.object({
    id: id.required(),
});

module.exports = { createTicketSchema, updateTicketSchema, getTicketSchema };
