require("dotenv").config();

const { Sequelize } = require("sequelize");

const { DB_NAME, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DIALECT } = process.env;

// console.log(process.env);

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

module.exports = sequelize;
