module.exports = function(sequelize, DataTypes) {
  const games = sequelize.define("games", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  games.associate = function(models) {
    games.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return games;
};
