const request = require('./apiManager');
let x = new request
const logger = require("./logger")




logger.info('function getPokemons(type, value) with type = type and value = banana. Suppose to get a message "Error: The pokemon was not found"')
x.putPokemon("type", "banana").then(data=>{
    console.log(data)
    if (data=>(data) =="Error: The pokemon was not found")
logger.info('test was successful')
else
logger.info('test failed')})


// logger.info('function getPokemons(type, value) with type = type and value = water. Suppose to get array of objects with the filtered pokemons')
// x.putPokemon("type", "water").then(data=>{
//     console.log(data)
//     if (data=>(data) =="Error: The pokemon was not found")
// logger.info('test failed')
// else
// logger.info('test was successful')})