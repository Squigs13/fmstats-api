const db = require('_helpers/db');
const Sequelize = require('sequelize');

module.exports = {
  getAll,
  getById,
  update,
  create
};

async function getAll() {
  return await db.stats.findAll();
}

async function getById(id) {
  return await getStat(id);
}

async function update(id, params) {
  const stat = await getStat(id);

  // copy params to stat and save
  Object.assign(stat, params);
  await stat.save();
  await stat.reload();

  return stat;
}

async function create(params) {
  // validate
  if (await db.stats.findOne({ where: { season_id: params.season_id, match_type: params.match_type } })) {
    throw 'Stats already exist!';
  }

  // save user
  await db.stats.create(params);
  
}

// helper functions

async function getStat(id) {
  const stat = await db.stats.findByPk(id, {
    include: { all: true }
  });
  if (!stat) throw 'Stat not found';
  return stat;
}
