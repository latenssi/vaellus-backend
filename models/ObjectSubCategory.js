"use strict";

module.exports = (queryInterface, Sequelize) =>
  queryInterface.define("ObjectSubCategory", {
    topCategoryId: {
      type: Sequelize.INTEGER,
      references: {
        model: queryInterface.import("./ObjectTopCategory"),
        key: "id"
      },
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT
    }
  });
