var _ = require('lodash');


// filter out any null or undefined values
function filterArray(array){  
  array = array.filter(function (el) {
     if (el != null || el != undefined) { 
      return el
     }
  })
  return array
} 

function dataFormatter(action, data, key) {
  
  if (action == 'generate') {    
   // break apart the task and audienct data into seperate arrays
   let tasks = _.map(data, 'task')
   let audiences = _.map(data, 'audience')

    tasks = filterArray(tasks)
    audiences = filterArray(audiences)
    // return an array or arrays!
    return [
      tasks,
      audiences
    ] 
  } else if (action == 'getAll') {    
    // get all ideas
     let values = _.map(data, key)
     values = filterArray(values)
     return values
  }
  
}

module.exports = {
  dataFormatter: dataFormatter
}
