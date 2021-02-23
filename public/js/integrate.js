const tags = {
  async: true,
  crossDomain: true,
  url: "https://rawg-video-games-database.p.rapidapi.com/tags",
  method: "GET",
  headers: {
    "x-rapidapi-key": "42ca9b14d7mshcb6f9941588baf5p14e966jsndd89e573a809",
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
  }
};

const games = {
  async: true,
  crossDomain: true,
  url: "https://rawg-video-games-database.p.rapidapi.com/games",
  method: "GET",
  headers: {
    "x-rapidapi-key": "42ca9b14d7mshcb6f9941588baf5p14e966jsndd89e573a809",
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
  }
};

const genres = {
  async: true,
  crossDomain: true,
  url: "https://rawg-video-games-database.p.rapidapi.com/genres",
  method: "GET",
  headers: {
    "x-rapidapi-key": "42ca9b14d7mshcb6f9941588baf5p14e966jsndd89e573a809",
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
  }
};

const platforms = {
  async: true,
  crossDomain: true,
  url: "https://rawg-video-games-database.p.rapidapi.com/platforms",
  method: "GET",
  headers: {
    "x-rapidapi-key": "42ca9b14d7mshcb6f9941588baf5p14e966jsndd89e573a809",
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
  }
};

$.ajax(games, platforms, genres, tags).done(response => {
  console.log(response);
});
