const bcrypt = require("bcryptjs"); // hashes out the password

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  User.associate = function(models) {
    User.belongsTo(models.Games, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  User.prototype.validPassword = function(password) {
    // checks for correct password
    return bcrypt.compareSync(password, this.password);
  };
  User.addHook("beforeCreate", user => {
    ser.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
