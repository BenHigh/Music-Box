module.exports = function(sequelize, DataTypes) {
var Note = sequelize.define("Note", {
  note_name: DataTypes.STRING,
  active: DataTypes.BOOLEAN,
  song_id: DataTypes.INTEGER
}, {
  timestamps: true
});
return Note;
};
