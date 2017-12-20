module.exports = function(sequelize, DataTypes) {
var Note = sequelize.define("Note", {
  note_name: DataTypes.STRING,
  active: DataTypes.BOOLEAN,
  song_id: DataTypes.INTEGER
  // INVESTIGATE THE SONG_ID RELATIONSHIP
},


// NEED TO CREATE RELATIONSHIP BETWEEN MODELS WITH FOREIGN KEY
// Note.associate=function(models){
//   Note.belongsto(models.Song,{
//     foreignkey: {
//       allowNull: false
//     }
//   });
// },

{
  timestamps: true
});
return Note;
};
