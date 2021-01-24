const { MessageEmbed } = require("discord.js");

module.exports = function(msg){
  const online = msg.guild.members.cache.filter(
    (member) => member.presence.status != "offline"
  ).size;

  const offline = msg.guild.members.cache.filter(
    (member) => member.presence.status == "offline"
  ).size;

  const Embed = new MessageEmbed()
    .setTitle(`Server Stats`)
    .addField("Online Members", online)
    .addField("Offline Members", offline);
  msg.reply(Embed);
}