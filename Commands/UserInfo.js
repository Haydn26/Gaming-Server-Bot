const { MessageEmbed } = require("discord.js");
const Info = require("./Helpers/senderInfo.js");

module.exports = function(msg){
  const guildMembers = msg.channel.guild.members.cache;
        const senderID = msg.author.id;
        const guildUserInfo = guildMembers.get(senderID);
        const userInfo = Info(guildUserInfo);

        const embed = new MessageEmbed()
          .setTitle("Info on you!")
          .setColor(0xff0000)
          .setDescription(
            `Here is some information on your profile ${userInfo.Username}`
          )
          .addField("You joined", `${userInfo.Joined} days ago`)
          .addField("Your Roles", `${userInfo.Roles}`);

        if (!userInfo.Bot) {
          embed.addField("Bot?", "Good news, your are not a bot!");
        } else {
          embed.addField("Bot?", "Beep, Boop! I am a bot");
        }

        msg.reply(embed);
}