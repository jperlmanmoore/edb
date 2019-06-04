// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devourBurger").on("click", function(event) {
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
        function(){ 
          console.log("changed burger to", newDevoured);
          location.reload();
        }
      );
    });

    $(".create-burger").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: false
      };

      $.ajax("/api/brgrs", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });

    // $(".delete-burger").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   $.ajax('/api/brgr/' + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted cat", id);
    //       location.reload();
    //     }
    //   );
    // });
  });