"use strict";

module.exports = (sequelize, DataTypes) => {
  const ObjectSubCategory = sequelize.import("./ObjectSubCategory");
  const HikeUser = sequelize.import("./HikeUser");

  return sequelize.define("HikeUserObjectCategory", {
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: ObjectSubCategory,
        key: "id"
      },
      allowNull: false
    },
    hikeuserId: {
      type: DataTypes.INTEGER,
      references: {
        model: HikeUser,
        key: "id"
      },
      allowNull: false
    }
  });
};
