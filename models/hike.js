"use strict";

module.exports = (queryInterface, Sequelize) =>
  queryInterface.define("Hike", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dateFrom: {
      type: Sequelize.DATEONLY
    },
    dateTo: {
      type: Sequelize.DATEONLY
    }
  });
