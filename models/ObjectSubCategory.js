"use strict";

module.exports = (sequelize, DataTypes) => {
  const ObjectTopCategory = sequelize.import("./ObjectTopCategory");

  return sequelize.define("ObjectSubCategory", {
    topCategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: ObjectTopCategory,
        key: "id"
      },
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    }
  });
};
