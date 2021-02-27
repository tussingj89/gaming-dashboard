const db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the games
  app.get("/profile.html", (req, res) => {
    db.games.selectAll(data => {
      const hbsObject = {
        games: data
      };
      console.log(hbsObject);
      res.render("profile", hbsObject);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/games/:id", (req, res) => {
    db.games
      .findOne({
        where: {
          id: req.params.id
        },
        include: [db.User]
      })
      .then(dbgames => {
        res.json(dbgames);
      });
  });

  // POST route for saving a new post
  app.post("/api/games", (req, res) => {
    console.log(req.user.id);
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
