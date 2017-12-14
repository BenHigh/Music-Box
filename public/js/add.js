$("#btn1").on("click", function(event) {
  event.preventDefault();

  var newNotes = {
    note_name: "A4",
    active: true
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/sounds", newNotes)
  // on success, run this callback
    .done(function(data) {
    // log the data we found
    console.log(data);
    // tell the user we're adding a volunteer with an alert window
    alert("Adding volunteer...");
  });
});
