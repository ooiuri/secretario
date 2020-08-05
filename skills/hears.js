// Botkit is powered by "skills". For example this one is "hears"
// Basically the bot listens to to direct mentions and mentions (of the bot)
// and if it hears the word "!thanks" then the skill is triggered
// try changing the trigger word 
// here are the docs for more info https://botkit.ai/docs/v0/core.html
// and the Botkit Discord code which has some great examples! 
// https://github.com/brh55/botkit-discord



module.exports = function(controller) {
  const prefix = '!';
  controller.hears(["valeu","obrigado"], ['direct_mention','ambient'], (bot, message) => {
    
    let response;
    let sender = message.user;
    
    // Many bots use the this method but sometimes it doesn't work, for example if you mention more than one person
    //let recipient = message.mentions.users.last();
    
    
    // this method filters out any users that aren't bots
    // if you have a bot that does more administrative things like blocking people, you might want to filter even more
    // like filter out admins or the person sending the message
    // it's using Discord.js for all this, yep that's right you have access to everything in Botkit AND Discord.js
    // https://discord.js.org/#/docs/main/master/class/User
    let recipient = message.mentions.users.filter(user => user.bot === false).last();
    
    
    // this is a list of potential responses, it chooses from them randomly.
    // Try changing them or adding your own. 
    let responses = [
      `${sender} parabenizou ${recipient}! 🎉`,
      `${sender} acha que ${recipient} é o brabo! ✨`,
      `Oi ${recipient}! ${sender} agradeceu demais! 😍`,
      `Alô ${recipient}! ${sender} mandou um salve! 💪`
    ]

    response = responses[Math.floor(Math.random() * responses.length)];
    
    bot.reply(message, response);
  });
/*
  controller.hears('hello',["direct_message"],(bot, message) => {
      console.log("entrei");
      bot.reply(message, 'how goes there :)!');
  });
  */
  controller.hears("olá", ['direct_message','direct_mention','ambient'], (bot, message) => {
    bot.reply(message, 'oi .');
  });
  
  controller.hears(prefix + 'ping', ['direct_message','direct_mention','ambient'], (bot,message)=>{
    console.log(prefix + 'ping');
    bot.reply(message, 'pong! :smile: ');
  })
  
  controller.hears('lindo', ['direct_message','direct_mention','ambient'], (bot,message)=>{
    bot.reply(message, 'para! 😍 '); 
  })
  
  controller.hears('acho', ['direct_message','direct_mention','ambient'], (bot,message)=>{
    bot.reply(message, 'engenheiro não acha! 💪');
  })
  
  controller.hears('amo', ['direct_message','direct_mention','ambient'], (bot,message)=>{
    bot.reply(message, 'o amor é lindo! 😍');
  })
}; 


