"use strict";

module.exports = (sequelize, DataTypes) => {
  const ObjectSubCategory = sequelize.import("./ObjectSubCategory");

  return sequelize.define("Object", {
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: ObjectSubCategory,
        key: "id"
      },
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mass: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    packed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    found: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
};
