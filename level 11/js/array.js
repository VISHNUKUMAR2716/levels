let food =['briyani','pasta','dosa','pongal','vada']
 food.push('sambar')

 food.shift()

 let length =food.length

 let indexofpast= food.indexOf('dosa')

 let newfood =food.slice(1,3)

 console.log('origines of food :',food)
 console.log('new array :',newfood)
 console.log(length)
 console.log(indexofpast)