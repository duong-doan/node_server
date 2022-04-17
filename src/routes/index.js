const moviesRouter = require("./MoviesRouter");
const authRouter = require("./AuthRouter");

const routes = (app) => {
  app.use("/movies", moviesRouter);
  app.use("/auth", authRouter);
  app.use("/", (req, res) => {
    res.send("home");
  });
};

module.exports = routes;
