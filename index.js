const express = require("express");
// const morgan = require("morgan");
const app = express();
const port = 4000;
const routes = require("./src/routes");
const db = require("./src/data/db");

db.connect();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// mongoose

// app.use(morgan("combined"));

routes(app);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
