module.exports = function(sequelize, DataTypes) {
var Notes = sequelize.define("Notes", {
  note_name: DataTypes.STRING,
  active: BOOLEAN,
}, {
  timestamps: true
});
return Notes;
};
