'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
const { SALT } = require('../config/server-config');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type:DataTypes.STRING,
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 100]
      }
    },
    token: {
      type:DataTypes.STRING(250),
      allowNull: true,
    },
    jokes: {
      type: DataTypes.JSON,
      defaultValue: [],
  },
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user) => {
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
  });

  User.prototype.toJSON = function () {
    const values = { ...this.get() };
    delete values.password;
    return values;
  };

  return User;
};