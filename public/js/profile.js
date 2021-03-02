$(() => {
  $(".played").on("click", function(event) {
    event.preventDefault();
    console.log("played button clicked");
    // console.log(this);
    const id = $(this).data("id");

    const newPlayedState = {
      played: true
    };
    // Send the PUT request.
    $.ajax("/api/games/" + id, {
      type: "PUT",
      data: newPlayedState
    }).then(() => {
      console.log("changed played to true");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".edit").on("click", event => {
    event.preventDefault();
    console.log("edit button clicked");
    console.log(event.target);
    const id = $(event.target).data("id");
    console.log(id);
    window.location.href = "/addgame.html?game_id=" + id;
  });
});

$(document).ready(() => {
  $(".sidenav").sidenav();
});
