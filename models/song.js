// This creates our song model

module.exports = function(sequelize, DataTypes) {
var Song = sequelize.define("Song", {
  title: DataTypes.STRING,
}, {
  timestamps: true
});
return Song;
};
