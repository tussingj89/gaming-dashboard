const db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the games
  app.get("/gamepage.html", (req, res) => {
    db.games.findAll({}).then(data => {
      // console.log(data);
      // res.json(data);
      res.render("gamepage", { games: data });
    });
  });
  // GET Route for getting games by the user
  app.get("/profile.html", (req, res) => {
    db.games
      .findAll({
        where: {
          UserId: req.user.id
        }
      })
      .then(data => {
        // console.log(data);
        res.render("profile", { games: data });
      });
  });
  // POST route for saving a new games
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
  // PUT route for updating game
  app.put("/api/games/:id", (req, res) => {
    // console.log(req.body);
    db.games
      .update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(dbgames => {
        res.json(dbgames);
      });
  });
  // PUt route for updating the game
  app.put("/api/games", (req, res) => {
    // console.log(req.body);
    db.games
      .update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(dbgames => {
        res.json(dbgames);
      });
  });
  // GET route for getting game by id number
  app.get("/api/games/:id", (req, res) => {
    db.games
      .findOne(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(dbgames => {
        res.json(dbgames);
      });
  });
};
