const express = require('express');
const router = express.Router();
const Joi = require('joi');

const validateRequest = require('_middleware/validate-request');
// const authorize = require('_middleware/authorize')
const statService = require('./stats.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', updateSchema, update);
router.post('/', updateSchema, create);

module.exports = router;

function getAll(req, res, next) {
  statService.getAll()
    .then(stats => res.json(stats))
    .catch(next);
}

function getById(req, res, next) {
  statService.getById(req.params.id)
    .then(stat => res.json(stat))
    .catch(next);
}

function create(req, res, next) {
  statService.create(req.body)
    .then(() => res.json({ message: 'New stats entered' }))
    .catch(next);
}

function updateSchema(req, res, next) {
  const schema = Joi.object({
    season_id: Joi.number(),
    match_type: Joi.number(),
    starts: Joi.number().allow(null),
    subs: Joi.number().allow(null),
    goals: Joi.number().allow(null),
    pens_taken: Joi.number().allow(null),
    pens_scored: Joi.number().allow(null),
    assists: Joi.number().allow(null),
    pom: Joi.number().allow(null),
    yellow_cards: Joi.number().allow(null),
    red_cards: Joi.number().allow(null),
    tackles_won: Joi.number().precision(2).allow(null),
    pass_completion: Joi.number().allow(null),
    dribbles_made: Joi.number().precision(2).allow(null),
    shots_target: Joi.number().allow(null),
    fouls: Joi.number().allow(null),
    fouls_against: Joi.number().allow(null),
    average_rating: Joi.number().precision(2).allow(null),
    conceded: Joi.number().allow(null),
    clean_sheets: Joi.number().allow(null),
    conceded_rate: Joi.number().precision(2).allow(null),
  });
  validateRequest(req, next, schema);
}

function update(req, res, next) {
  statService.update(req.params.id, req.body)
    .then(stat => res.json(stat))
    .catch(next);
}