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
      allowNull: true,
      len: [1]
    },
    platform: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    played: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
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
