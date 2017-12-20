var db=require("../models");

module.exports=function(app) {
  app.post("/api/sounds", function(req,res){
    console.log(req.body);
    console.log("post hit route api/sounds");

    var Note = req.body;

    db.Note.create({
      note_name: Note.note_name,
      active: Note.active
    });
  res.json(true);
});


  app.post("/api/song", function(req,res){
    console.log(req.body);
    console.log("post hit route api/song");

    var Song = req.body;

    db.Song.create({
      title: Song.title,
    });
  res.json(true);
  });


  // app.get("/api/song", function(req,res){
  //
  // });

};
