const express = require('express')
const router = express.Router()
let pokemon = require('./pokemon')
const logger = require("./logger")
let pokemonDB = []
pokemon.forEach(p => pokemonDB.push({id: p.id, name: p.name, type: p.type, height: p.height, weight: p.weight}))

// GET
router.get('/pokemon', function (req, res) {
  let value = req.body.value;
  let type = req.body.type;
  if (type === "id" || type === "height" || type === "weight") {
    value = Number(value)
  }
  let result = pokemonDB.filter(p => p[type] === value)
  res.send(result)
})

// PUT
router.put('/pokemon', function (req, res) {
  let value = req.body.value;
  let type = req.body.type;
  let changedType = req.body.changedType;
  let changedValue = req.body.changedValue;
  if (type === "id" || type === "height" || type === "weight") {
    value = Number(value)
  }
  if (changedType === "id" || changedType === "height" || changedType === "weight") {
    changedValue = Number(changedValue)
  }
  let result = pokemonDB.find(p => p[type] === value)
  if (result) {
    result[changedType] = changedValue
    res.send(`A pokemon with ${type} of ${value} was changed. His ${changedType} was changed to ${changedValue}`)
    logger.info(`A pokemon with ${type} of ${value} was changed. His ${changedType} was changed to ${changedValue}`)
  } else {
    res.send(`A pokemon with ${type} of ${value} was not found`)
    logger.info(`A pokemon with ${type} of ${value} was not found`)
  }
})

// POST
router.post('/pokemon', function (req, res) {
  let id = Number(req.body.id);
  let name = req.body.name;
  let type = req.body.type;
  let height = Number(req.body.height);
  let weight = Number(req.body.weight);
  let idCheck = pokemonDB.find(p => p.id === id)

  if (idCheck) {
    res.send(`A pokemon with id of ${id} The id is already exist`)
    logger.info(`A pokemon with id of ${id} The id is already exist`)
  } else {
    pokemonDB.push({ id, name, type, height, weight })
    res.send(`A new pokemon with id of ${id} was added:\nName: ${name} ; Type: ${type} ; Height: ${height} ; Weight: ${weight}`)
    logger.info(`A new pokemon with id of ${id} was added:\nName: ${name} ; Type: ${type} ; Height: ${height} ; Weight: ${weight}`)
  }
})

// DELETE
router.delete('/pokemon', function (req, res) {
  let value = req.body.value;
  let type = req.body.type;
  if (type === "id" || type === "height" || type === "weight") {
    value = Number(value)
  }
  let index = pokemonDB.findIndex(p => p[type] === value)
  if (index!==-1) {
    pokemonDB.splice(index, 1)
    res.send(`A pokemon with ${type} of ${value} was deleted`)
    logger.info(`A pokemon with ${type} of ${value} was deleted`)
  } else {
    res.send(`A pokemon with ${type} of ${value} was not found`)
    logger.info(`A pokemon with ${type} of ${value} was not found`)
  }
})

module.exports = router