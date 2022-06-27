const boom = require("@hapi/boom");

// validates the request body against the schema
const validatorHandler = (schema, property) => {
    return (req, res, next) => {
        const { error } = schema.validate(req[property], { abortEarly: false });
        if (error) {
            next(boom.badRequest(error));
        } else {
            next();
        }
    };
};

module.exports = validatorHandler;
