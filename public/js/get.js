$("#load").on("click", function(event) {
  event.preventDefault();
  console.log("loading");
  $.get("/api/song", function(data){
    console.log(data);
    console.log(data.title);
    for (var i = 0; i < data.length; i++) {
    $("#print").append("<h6>Saved Song: " + data[i].title + "</h6>");
  }
  });
});
