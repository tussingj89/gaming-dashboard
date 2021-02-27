// Requiring path to so we can use relative routes to our HTML files
// const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members.html");
    }
    //res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.render("index");
  });

  app.get("/login.html", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members.html");
    }
    res.render("login");
  });

  app.get("/signup.html", (req, res) => {
    if (req.user) {
      res.redirect("members.html");
    }
    res.render("signup");
  });

  app.get("/profile.html", (req, res) => {
    if (req.user) {
      res.render("profile");
    }
  });

  app.get("/addgame.html", (req, res) => {
    if (req.user) {
      res.render("addgame");
    }
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members.html", isAuthenticated, (req, res) => {
    res.render("members");
  });
};
