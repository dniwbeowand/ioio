const Discord = require('discord.js')
const vcodes = require("vcodes.js");
const botdata = require("../database/models/botlist/bots.js")
module.exports.run = async (client,message,args) => {
   let x = await botdata.find();
   const embed = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
   .setDescription(`**Commands**

.botinfo [bot id]
.bots (show all bots)

[Website](https://dbotlist.co) - [Add Bot](https://dbotlist.co/addbot)
`)
   .setColor("#7289da")
   message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
  };
  
  exports.help = {
    name: "help",
    description: "",
    usage: ""
  };