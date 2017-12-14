module.exports = function(sequelize, DataTypes) {
var Note = sequelize.define("Note", {
  note_name: DataTypes.STRING,
  active: DataTypes.BOOLEAN,
}, {
  timestamps: true
});
return Note;
};
