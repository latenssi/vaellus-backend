"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Objects", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "ObjectSubCategory",
          key: "id"
        },
        allowNull: false
      },
      userCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "HikeUserObjectCategory",
          key: "id"
        }
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Objects");
  }
};
