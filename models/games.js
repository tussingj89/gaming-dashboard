module.exports = function(sequelize, DataTypes) {
  const Games = sequelize.define("Games", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Games.associate = function(models) {
    Games.belongsTo(models.Platform, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Games;
};
