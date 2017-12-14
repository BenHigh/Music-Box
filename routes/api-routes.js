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

};
