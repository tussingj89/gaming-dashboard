const db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the games
  app.get("/gamepage.html", (req, res) => {
    db.games.selectAll(data => {
      const games = {
        games: data
      };
      console.log(hbsObject);
      res.render("gamepage", games);
    });
  });
  app.get("/profile.html", (req, res) => {
    db.games.selectAll({
      where: {
        UserId: req.user.id
      }
    });
    res.render("profile", games);
  });
  // POST route for saving a new post
  app.post("/api/games", (req, res) => {
    // console.log(req.user.id);
    db.games
      .create({
        title: req.body.title,
        review: req.body.review,
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
