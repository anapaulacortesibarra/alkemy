// log errors
const logErrors = (err, req, res, next) => {
    console.error("[ERROR LOG]", err);
    next(err);
};

// if a boom error, return the error
const boomErrorHandler = (err, req, res, next) => {
    if (err.isBoom) {
        const {
            output: { statusCode, payload },
        } = err;
        res.status(statusCode).json(payload);
    } else {
        next(err);
    }
};

// ORM error handler
const ormErrorHandler = (err, req, res, next) => {
    if (err instanceof Sequelize.ValidationError) {
        res.status(409).json({
            statusCode: 409,
            message: err.name,
            errors: err.errors,
        });
    } else {
        next(err);
    }
};

// if not a boom error, return a 500 error
const errorHandler = (err, req, res, next) => {
    res.status(500).json({ message: err.message });
};

module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler };
