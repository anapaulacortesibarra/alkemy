const joi = require("joi");

const id = joi.string().uuid();
const email = joi.string().email();
const password = joi.string().min(8).max(30);

const createUserSchema = joi.object({
    email: email.required(),
    password: password.required(),
});

const updateUserSchema = joi.object({
    email: email,
    password: password,
});

const getUserSchema = joi.object({
    id: id.required(),
}); 

module.exports = {
    createUserSchema,
    updateUserSchema,
    getUserSchema,
};
