class AuthController {
  register(req, res) {
    res.send("register method auth");
  }
  login(req, res) {
    res.send("login method auth");
  }
}

module.exports = new AuthController();
