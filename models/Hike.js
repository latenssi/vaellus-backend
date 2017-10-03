"use strict";

module.exports = (sequelize, DataTypes) =>
  sequelize.define("Hike", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateFrom: {
      type: DataTypes.DATEONLY
    },
    dateTo: {
      type: DataTypes.DATEONLY
    }
  });
