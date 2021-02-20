module.exports = function(sequelize, DataTypes) {
    var Platform = sequelize.define("Platform", {
          name: DataTypes.STRING
    });
  
    Platform.associate = function(models) {
        Platform.hasMany(models.User, {
        onDelete: "cascade"
      });
    };
  
    return Platform;
  };