"use strict";

const fs = require("fs");
const path = require("path");

module.exports = queryInterface => {
  return fs
    .readdirSync(__dirname)
    .filter(file => file.indexOf(".") !== 0 && file !== "index.js")
    .map(file => queryInterface.import(path.join(__dirname, file)))
    .reduce((db, model) => {
      db[model.name] = model;
      return db;
    }, {});
};
