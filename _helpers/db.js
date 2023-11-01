const { Sequelize } = require('sequelize');
const initModels = require("../models/init-models");

const { dbName, dbConfig } = require('config.js');

module.exports = db = {};

// Override timezone formatting for MSSQL
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};

initialize();

async function initialize() {
  const dialect = 'mssql';
  const host = dbConfig.server;
  const logging = false;
  const { userName, password } = dbConfig.authentication.options;

  // connect to db
  const sequelize = new Sequelize(dbName, userName, password, { host, dialect, logging });

  // init models and add them to the exported db object
  var models = initModels(sequelize);
  Object.assign(db, models);

}
