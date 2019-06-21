// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devourBurger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevour");
    var newDevouredState = {
      devoured: newDevoured
    };
    console.log(newDevouredState);

    $.ajax("/api/brgrs/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed burger to", newDevoured);
        location.reload();
      }
    );
  });

  $(".create-burger").on("submit", function (event) {
    event.preventDefault();


    if ("burger_name" != "") {
    var newBurger = {
      burger_name: $("#burg").val().trim(),
      devoured: false
    };
  };

      $.ajax("/api/brgrs", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          location.reload();
        }
      );
  });


  $(".deleteBurger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(this)
    $.ajax('/api/brgrs/' + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });

  // I spend a lot of time working on figuring out if I could get the app to work on Heroku, I just didn't finish a delete burger part.
});