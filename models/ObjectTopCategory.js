"use strict";

module.exports = (sequelize, DataTypes) => {
  const Hike = sequelize.import("./Hike");

  return sequelize.define("ObjectTopCategory", {
    hikeId: {
      type: DataTypes.INTEGER,
      references: {
        model: Hike,
        key: "id"
      },
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
