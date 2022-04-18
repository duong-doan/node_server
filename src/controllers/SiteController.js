const Movie = require("../models/Movie");

class SiteController {
  index(req, res) {
    Movie.find({}, (err, movie) => {
      if (err) console.log("error");
      res.json(movie);
    });
    // res.json({ name: "home page" });
  }
}

module.exports = new SiteController();
