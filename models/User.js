"use strict";

module.exports = (queryInterface, Sequelize) =>
  queryInterface.define("User", {
    username: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
