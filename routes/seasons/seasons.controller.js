const express = require('express');
const router = express.Router();
const Joi = require('joi');

const validateRequest = require('_middleware/validate-request');
// const authorize = require('_middleware/authorize')
const seasonService = require('./season.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', updateSchema, update);
router.post('/', updateSchema, create);

module.exports = router;

function getAll(req, res, next) {
  seasonService.getAll(req.query)
    .then(seasons => res.json(seasons))
    .catch(next);
}

function getById(req, res, next) {
  seasonService.getById(req.params.id, req.query)
    .then(season => res.json(season))
    .catch(next);
}

function create(req, res, next) {
  seasonService.create(req.body)
    .then(() => res.json({ message: 'New season entered' }))
    .catch(next);
}

function updateSchema(req, res, next) {
  const schema = Joi.object({
    player_id: Joi.number(),
    year: Joi.string(),
    club: Joi.string(),
    info: Joi.string().allow(null).allow(''),
    nation: Joi.string(),
    division: Joi.string(),
  });
  validateRequest(req, next, schema);
}

function update(req, res, next) {
  seasonService.update(req.params.id, req.body)
    .then(season => res.json(season))
    .catch(next);
}