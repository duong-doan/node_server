const express = require("express");
const router = express.Router();
const movieController = require("../controllers/MovieController");

router.use("/id", movieController.getMovie);
router.use("/", movieController.getMovies);

module.exports = router;
