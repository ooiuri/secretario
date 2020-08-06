var formatData = require('./formatData');


function soRandom(items) {
  return Math.floor(Math.random() * (items.length))
}  

function generateStartup(data) {
  let prettyData = formatData.dataFormatter('generate', data.rows)
  
  let task = prettyData[0][soRandom(prettyData[0])]
  let audience = prettyData[1][soRandom(prettyData[1])]

  let ideas = [
    `It's a peer-to-peer network for ${task}, for ${audience}.`,
    `My big idea is: on-demand ${task}, for ${audience}.`,
    `What if you could outsource ${task} out to ${audience}?`,
    `Why isn't anyone disrupting the whole industry of ${task}, for ${audience}?`,
    `I'm starting my own company! It's the uber of ${task} for ${audience}.`,
    `Imagine this: ${task} designed just for ${audience}.`,
    `What if there was a platform where ${audience} could get advice about ${task}???`,
    `Why isn't there a subscription box for ${audience}???`,
    `The new hot app is all about ${task}. Designed by ${audience} for ${audience}.`
  ]
  return ideas[soRandom(ideas)]
}


module.exports = {
  generateStartup: generateStartup
}
