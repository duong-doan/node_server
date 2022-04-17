class MovieController {
  getMovies(req, res) {
    res.send("getMovies method movies");
  }
  getMovie(req, res) {
    res.send("get 1 method movie");
  }
}

module.exports = new MovieController();
