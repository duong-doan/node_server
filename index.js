const express = require("express");
// const morgan = require("morgan");
const app = express();
const port = 4000;
const routes = require("./src/routes");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// app.use(morgan("combined"));

routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
