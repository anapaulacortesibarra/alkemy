const boom = require("@hapi/boom");

// validates the request body against the schema
const validatorHandler = (schema, property) => {
    return (req, res, next) => {
        const { error } = schema.validate(req[property]);
        if (error) {
            next(boom.badRequest(error.details[0].message));
        } else {
            next();
        }
    };
};

module.exports = validatorHandler;
