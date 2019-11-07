const request = require('./apiManager');
let x = new request
const logger = require("./logger")



logger.info('function deletePokemon(type, value) with type(incorrect) = "banana" and without any value . Suppose to get an error or message `A pokemon with ${type} of ${value} was not found`')
x.deletePokemon().then(data =>{
    console.log(data)
    if(data => console.log(data) === "`A pokemon with ${type} of ${value} was deleted`")
        logger.info('test failed');
    else
        logger.info('test was successful')
    })


// logger.info('function deletePokemon(type, value) with type=id, value = 208. Suppose to get an error or message `A pokemon with ${type} of ${value} was deleted`')
// x.deletePokemon().then(data =>{
//     console.log(data)
//     if(data => console.log(data) === "`A pokemon with ${type} of ${value} was not found`")
//         logger.info('test failed');
//     else
//         logger.info('test was successful')
//     })
