const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require("./middlewares/error.handler");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

routerApi(app);

// error middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(ormErrorHandler)
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Alkemy app listening at http://localhost:${port}`);
});
