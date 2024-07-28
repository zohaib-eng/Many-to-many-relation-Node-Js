const config = require("../config/db.config.js");


const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorial_tag= require("./tutorial_tag");
db.tutorial = require("./tutorial.model.js")(sequelize, Sequelize);
db.tag = require("./tag.model.js")(sequelize, Sequelize);

db.tag.belongsToMany(db.tutorial, {through:"tutorial_tag"});
db.tutorial.belongsToMany(db.tag, {through:"tutorial_tag"});

module.exports = db;