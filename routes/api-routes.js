var db=require("../models");

module.exports=function(app) {
  app.post("/api/sounds", function(req,res){
    console.log(req.body);
    console.log("post hit route api/sounds");

    var notes = req.body;

    db.Notes.create({
      note_name: notes.note_name,
      active: notes.active
    });
  });
};
