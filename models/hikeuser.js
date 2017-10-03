"use strict";

module.exports = (queryInterface, Sequelize) =>
  queryInterface.define("HikeUser", {
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: queryInterface.import("./user"),
        key: "id"
      },
      allowNull: false
    },
    hikeId: {
      type: Sequelize.INTEGER,
      references: {
        model: queryInterface.import("./hike"),
        key: "id"
      },
      allowNull: false
    }
  });
