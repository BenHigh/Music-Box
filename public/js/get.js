$("#load").on("click", function(event) {
  event.preventDefault();
  console.log("loading");
  $.get("/api/song", function(data){
    console.log(data.title);
    $("#print").append(data.title);
  });
});
