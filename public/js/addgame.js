$(document).ready(() => {
  // Getting jQuery references to the post body, title, form, and author select
  const reviewInput = $("#review");
  const platformInput = $("#platform");
  const titleInput = $("#title");
  const ratingInput = $("#rating");
  const cmsForm = $("#cms");
  $(cmsForm).on("submit", handleFormSubmit);
  let postId;

  $(".sidenav").sidenav();

  const logout = "logout.html";
  logout.on("/logout", event => {
    event.req.logout();
    res.redirect("/");
  });

  // Sets a flag for whether or not we're updating a post to be false initially
  const updating = false;

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!titleInput.val().trim() || !platformInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    const newPost = {
      title: titleInput.val().trim(),
      review: reviewInput.val().trim(),
      rating: ratingInput.val(),
      platform: platformInput.val().trim(),
      played: playedInput.val(),
      userID: $(this).userID
    };

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    } else {
      submitPost(newPost);
    }
  }
  function submitPost(games) {
    $.post("/api/games", games, () => {
      window.location.href = "/profile.html";
    });
  }
  function updatePost(games) {
    $.ajax({
      method: "PUT",
      url: "/api/games",
      data: games
    }).then(() => {
      window.location.href = "/profile.html";
    });
  }
});
