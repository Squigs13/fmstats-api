const db = require('_helpers/db');
const parseQuery = require('_middleware/parse-query');

module.exports = {
  getAll,
  getById,
  update,
  create
};

async function getAll(query) {
  const queryObject = parseQuery(query);

  return await db.seasons.findAll(queryObject);
}

async function getById(id, query) {
  const queryObject = parseQuery(query);

  return await getSeason(id, queryObject);
}

async function update(id, params) {
  const season = await getSeason(id);

  // copy params to season and save
  Object.assign(season, params);
  await season.save();
  await season.reload();

  return season;
}

async function create(params) {
  // validate
  if (await db.seasons.findOne({ where: { player_id: params.player_id, year: params.year, club: params.club } })) {
    throw 'Season already exists!';
  }

  // save user
  await db.seasons.create(params);
  
}

// helper functions

async function getSeason(id) {
  const season = await db.seasons.findByPk(id, {
    include: { all: true }
  });
  if (!season) throw 'Season not found';
  return season;
}
