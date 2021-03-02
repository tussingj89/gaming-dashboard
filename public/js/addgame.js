$(document).ready(() => {
  const reviewInput = $("#review");
  const platformInput = $("#platform");
  const titleInput = $("#title");
  const ratingInput = $("#rating");
  const cmsForm = $("#cms");
  $(cmsForm).on("submit", handleFormSubmit);
  let gameId;
  const url = window.location.search;
  // $(".sidenav").sidenav();

  // Sets a flag for whether or not we're updating a post to be false initially
  let updating = false;

  if (url.indexOf("?game_id=") !== -1) {
    gameId = url.split("=")[1];
    // console.log(gameId);
    getGameData(gameId, "games");
  }
  function getGameData(id) {
    const queryUrl = "/api/games/" + id;

    $.get(queryUrl, data => {
      if (data) {
        console.log(data);
        titleInput.val(data.title);
        reviewInput.val(data.review);
        platformInput.val(data.platform);
        ratingInput.val(data.rating);
        updating = true;
      }
    });
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    if (!titleInput.val().trim() || !platformInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    const newgame = {
      title: titleInput.val().trim(),
      review: reviewInput.val().trim(),
      rating: ratingInput.val(),
      platform: platformInput.val().trim()
    };

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newgame.id = gameId;
      updatePost(newgame);
    } else {
      submitPost(newgame);
    }
  }
  function submitPost(games) {
    $.post("/api/games", games, () => {
      window.location.href = "/profile.html";
      // console.log(newgame);
    });
  }

  function updatePost(games) {
    $.ajax({
      method: "PUT",
      url: "/api/games/" + gameId,
      data: games
    }).then(() => {
      window.location.href = "/profile.html";
    });
  }
});
