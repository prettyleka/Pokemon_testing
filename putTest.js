const request = require('./apiManager');
let x = new request
const logger = require("./logger")

logger.info('function putPokemon(type, value, changedType, changedValue) with type(invalid) = 1 and value = 2 and undefined changedType, changedValue. Suppose to get an error or message "A pokemon with ${type} of ${value} was not found"')
x.putPokemon("id", "2").then(data=>{
    console.log(data)
if (data=>(data) == `A pokemon with ${type} of ${value} was not found`) 
logger.info('test was successful')
else
logger.info('test failed')})



// logger.info('function putPokemon(type, value, changedType, changedValue) with type = id and value = 2 and changedType = height, changedValue = 200. Suppose to get a message `A pokemon with ${type} of ${value} was changed. His ${changedType} was changed to ${changedValue}` ')
// x.putPokemon("id", "2", "height", "200").then(data=>{
//     console.log(data)
//     if (data=>(data) == `A pokemon with ${type} of ${value} was changed. His ${changedType} was changed to ${changedValue}`)
// logger.info('test was successful')
// else
// logger.info('test failed')})

