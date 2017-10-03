"use strict";

module.exports = (queryInterface, Sequelize) =>
  queryInterface.define("HikeUserObjectCategory", {
    categoryId: {
      type: Sequelize.INTEGER,
      references: {
        model: queryInterface.import("./objectsubcategory"),
        key: "id"
      },
      allowNull: false
    },
    hikeuserId: {
      type: Sequelize.INTEGER,
      references: {
        model: queryInterface.import("./hikeuser"),
        key: "id"
      },
      allowNull: false
    }
  });
