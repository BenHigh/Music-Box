// this adds our song information to the database
$("#save").on("click", function(event) {
  event.preventDefault();
  console.log("click");

  var newSong = {
    title: $("#input").val()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/song", newSong)
  // on success, run this callback
    .done(function(data) {
    // log the data we found
    console.log(data);
    // tell the user we're adding a volunteer with an alert window
  });
});


// this adds our note information to the database
$(".press").on("click", function(event) {
  event.preventDefault();
  console.log("click");


  var newNotes = {
    note_name: $(this).attr('data-note-type'),
    active: true
  };

  console.log(newNotes);

  // send an AJAX POST-request with jQuery
  $.post("/api/sounds", newNotes)
  // on success, run this callback
    .done(function(data) {
    // log the data we found
    console.log(data);
    // tell the user we're adding a volunteer with an alert window
  });
});
