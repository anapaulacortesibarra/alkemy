const express = require("express");
const routerApi = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routerApi(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
