"use strict";

module.exports = (queryInterface, Sequelize) =>
  queryInterface.define("HikeUserObjectCategory", {
    categoryId: {
      type: Sequelize.INTEGER,
      references: {
        model: queryInterface.import("./ObjectSubCategory"),
        key: "id"
      },
      allowNull: false
    },
    hikeuserId: {
      type: Sequelize.INTEGER,
      references: {
        model: queryInterface.import("./HikeUser"),
        key: "id"
      },
      allowNull: false
    }
  });
