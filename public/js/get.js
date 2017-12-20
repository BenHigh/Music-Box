$("#load").on("click", function(event) {
  event.preventDefault();
  console.log("loading");

  $.get("/api/song", function(data){

  });
});
