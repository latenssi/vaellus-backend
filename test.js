"use strict";

const chai = require("chai");
const expect = chai.expect;

const sequelize = new (require("sequelize"))("database", null, null, {
  dialect: "sqlite",
  storage: "test-db.sqlite"
});

const models = require("./models")(sequelize);

describe("Vaellus backend", () => {
  beforeEach(async () => {
    await models.Object.sync({ force: true });
    await models.HikeUserObjectCategory.sync({ force: true });
    await models.ObjectSubCategory.sync({ force: true });
    await models.ObjectTopCategory.sync({ force: true });
    await models.HikeUser.sync({ force: true });
    await models.Hike.sync({ force: true });
    await models.User.sync({ force: true });
  });

  it("should be able to create a User", async () => {
    await models.User.create({ username: "john" });
    const users = await models.User.findAll();
    expect(users)
      .to.be.an("array")
      .of.length(1);
  });

  it("should be able to create a Hike", async () => {
    await models.Hike.create({
      name: "Lapin vaellus 2017",
      dateFrom: new Date("2017-08-10"),
      dateTo: new Date("2017-08-18")
    });
    const hikes = await models.Hike.findAll();
    expect(hikes)
      .to.be.an("array")
      .of.length(1);
  });

  it("should be able to create a HikeUser", async () => {
    await models.User.create({ username: "john" });
    await models.Hike.create({ name: "Lapin vaellus 2017" });
    const userId = (await models.User.findAll())[0].id;
    const hikeId = (await models.Hike.findAll())[0].id;
    await models.HikeUser.create({ userId, hikeId });
    const hikeUsers = await models.HikeUser.findAll();
    expect(hikeUsers)
      .to.be.an("array")
      .of.length(1);
  });

  it("should be able to create an ObjectTopCategory", async () => {
    await models.Hike.create({ name: "Lapin vaellus 2017" });
    const hikeId = (await models.Hike.findAll())[0].id;
    await models.ObjectTopCategory.create({ hikeId, name: "Esine" });
    const categories = await models.ObjectTopCategory.findAll();
    expect(categories)
      .to.be.an("array")
      .of.length(1);
  });

  it("should be able to create an ObjectSubCategory", async () => {
    await models.Hike.create({ name: "Lapin vaellus 2017" });
    const hikeId = (await models.Hike.findAll())[0].id;
    await models.ObjectTopCategory.create({ hikeId, name: "Esine" });
    const topCategoryId = (await models.ObjectTopCategory.findAll())[0].id;
    await models.ObjectSubCategory.create({ topCategoryId, name: "Teltta" });
    const categories = await models.ObjectSubCategory.findAll();
    expect(categories)
      .to.be.an("array")
      .of.length(1);
  });

  it("should be able to create an Object", async () => {
    await models.Hike.create({ name: "Lapin vaellus 2017" });
    const hikeId = (await models.Hike.findAll())[0].id;
    await models.ObjectTopCategory.create({ hikeId, name: "Esine" });
    const topCategoryId = (await models.ObjectTopCategory.findAll())[0].id;
    await models.ObjectSubCategory.create({ topCategoryId, name: "Teltta" });
    const subCategory = (await models.ObjectSubCategory.findAll())[0];
    await models.Object.create({
      categoryId: subCategory.id,
      name: "MSR Carbon Reflex 3",
      mass: 222
    });
    const objects = await models.Object.findAll();
    expect(objects)
      .to.be.an("array")
      .of.length(1);
  });
});
