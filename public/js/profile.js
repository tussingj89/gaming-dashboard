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
    const currentGame = $(this)
      .parent()
      .parent()
      .data("game");
    window.location.href = "" + currentGame.id;
  });
});
