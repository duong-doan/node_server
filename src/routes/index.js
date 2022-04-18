const moviesRouter = require("./MoviesRouter");
const authRouter = require("./AuthRouter");
const siteController = require("./SiteRouter");

const routes = (app) => {
  app.use("/movies", moviesRouter);
  app.use("/auth", authRouter);
  app.use("/", siteController);
};

module.exports = routes;
