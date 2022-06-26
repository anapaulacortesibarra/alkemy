const logErrors = (err, req, res, next) => {
    console.error("[ERROR LOG]", err);
    next(err);
};

const errorHandler = (err, req, res, next) => {
    res.status(500).json({ message: err.message });
};

const boomErrorHandler = (err, req, res, next) => {
    if (err.isBoom) {
        const { output: { statusCode, payload } } = err;
        res.status(statusCode).json(payload);
    } else {
        next(err);
    }
};

module.exports = { logErrors, errorHandler, boomErrorHandler };
