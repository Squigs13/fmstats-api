const DataTypes = require("sequelize").DataTypes;
const _seasons = require("./seasons");
const _stats = require("./stats");

function initModels(sequelize) {
  const seasons = _seasons(sequelize, DataTypes);
  const stats = _stats(sequelize, DataTypes);

  stats.belongsTo(seasons, { as: "season", foreignKey: "season_id"});
  seasons.hasMany(stats, { as: "stats", foreignKey: "season_id"});

  return {
    seasons,
    stats,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
