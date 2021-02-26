// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  app.get("/api/user", (req, res) => {
    db.User.findAll({
      include: [db.games]
    }).then(dbUser => {
      res.json(dbUser);
    });
  });
  app.get("/api/user/:id", (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.games]
    }).then(dbUser => {
      res.json(dbUser);
    });
  });
  app.post("/api/user", (req, res) => {
    db.User.create(req.body).then(dbUser => {
      res.json(dbUser);
    });
  });
  app.delete("/api/user/:id", (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbUser => {
      res.json(dbUser);
    });
  });
};
