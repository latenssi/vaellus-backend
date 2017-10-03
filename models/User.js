"use strict";

module.exports = (sequelize, DataTypes) =>
  sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
