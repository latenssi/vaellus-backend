"use strict";

module.exports = (queryInterface, Sequelize) =>
  queryInterface.define("Object", {
    categoryId: {
      type: Sequelize.INTEGER,
      references: {
        model: queryInterface.import("./ObjectSubCategory"),
        key: "id"
      },
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    mass: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    packed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    found: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });
