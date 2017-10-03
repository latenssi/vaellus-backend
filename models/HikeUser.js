"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.import("./User");
  const Hike = sequelize.import("./Hike");

  return sequelize.define("HikeUser", {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id"
      },
      allowNull: false
    },
    hikeId: {
      type: DataTypes.INTEGER,
      references: {
        model: Hike,
        key: "id"
      },
      allowNull: false
    }
  });
};
