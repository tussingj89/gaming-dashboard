const db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the games
  app.get("/gamepage.html", (req, res) => {
    db.games.findAll({}).then(data => {
      console.log(data);
      // console.log(dataValues);
      // res.json(data);
      res.render("gamepage", { games: data });
    });
  });

  app.get("/profile.html", (req, res) => {
    db.games
      .findAll({
        where: {
          UserId: req.user.id
        }
      })
      .then(data => {
        console.log(data);
        res.render("profile", { games: data });
      });
  });
  // POST route for saving a new post
  app.post("/api/games", (req, res) => {
    // console.log(req.user.id);
    db.games
      .create({
        title: req.body.title,
        review: req.body.review,
        platform: req.body.platform,
        rating: req.body.rating,
        UserId: req.user.id
      })
      .then(dbgames => {
        res.json(dbgames);
      });
  });

  app.put("/api/games", (req, res) => {
    db.games
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(dbgames => {
        res.json(dbgames);
      });
  });
};
