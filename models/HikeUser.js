"use strict";

module.exports = (queryInterface, Sequelize) =>
  queryInterface.define("HikeUser", {
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: queryInterface.import("./User"),
        key: "id"
      },
      allowNull: false
    },
    hikeId: {
      type: Sequelize.INTEGER,
      references: {
        model: queryInterface.import("./Hike"),
        key: "id"
      },
      allowNull: false
    }
  });
