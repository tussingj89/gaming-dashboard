const db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the gamess
  app.get("/api/games", (req, res) => {
    const query = {};
    if (req.query.User_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.games
      .findAll({
        where: query,
        include: [db.User]
      })
      .then(dbgames => {
        res.json(dbgames);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/games/:id", (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
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
    db.games.create(req.body).then(dbgames => {
      res.json(dbgames);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/games/:id", (req, res) => {
    db.games
      .destroy({
        where: {
          id: req.params.id
        }
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
