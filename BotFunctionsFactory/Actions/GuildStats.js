const MemberAdd = require("./MemberAdd");

class Guildstats {
    constructor(client, MessageEmbed){
        this.Client = client;
        this.MessageEmbed = MessageEmbed;
    }

    online(msg){
        const online = msg.guild.members.cache.filter(
            (member) => member.presence.status !== "online"
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

}

module.exports = Guildstats;