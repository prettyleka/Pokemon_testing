const request = require('./apiManager');
let x = new request
const logger = require("./logger")


logger.info('function postPokemon(id, name, type, height, weight) without any value. Suppose to get an error or message "A new pokemon with id of NaN was not added"')
x.postPokemon().then(data =>{
    console.log(data)
    if(data => console.log(data) === "``A new pokemon with id of ${id} was added:\nName: ${name} ; Type: ${type} ; Height: ${height} ; Weight: ${weight}```")
        logger.info('test failed');
    else
        logger.info('test was successful')
    })



// logger.info('function postPokemon(id, name, type, height, weight) with valid value. Suppose to get message "A new pokemon with id of ${id} was added:\nName: ${name} ; Type: ${type} ; Height: ${height} ; Weight: ${weight}"')
// x.postPokemon("1", "208", "12", "23").then(data =>{
//     console.log(data)
//     if(data => console.log(data) === '`A new pokemon with id of ${id} was added:\nName: ${name} ; Type: ${type} ; Height: ${height} ; Weight: ${weight}`')
//         logger.info('test was successful');
//     else
//         logger.info('test failed')
//     })