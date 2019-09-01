require("dotenv/config");
const express = require("express"); //import
const logger = require("morgan");
const bodyParser = require("body-parser");
const routerRoot = require("./routes/root");

const app = express();
const port = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV || "Production";

app.listen(port, () => {
  console.log(`Server is running in ${nodeEnv} Mode on port ${port}`);
});

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routerRoot);

module.exports = app;
