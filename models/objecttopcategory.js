"use strict";

module.exports = (queryInterface, Sequelize) =>
  queryInterface.define("ObjectTopCategory", {
    hikeId: {
      type: Sequelize.INTEGER,
      references: {
        model: queryInterface.import("./hike"),
        key: "id"
      },
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
