const { MessageEmbed } = require("discord.js");

module.exports = function(msg){
  const embed = new MessageEmbed()
        .setTitle("I see you need help")
        .setColor(0xff0000)
        .setDescription(
          "I see you have seeked help from a young wise bot. Here are all the commands you are able to use. Please explore :)"
        )
        .addField(
          "!eightball",
          "Seek all the answers to your questions! example: !eightball Is this the best server you have ever seen?"
        )
        .addField("!dadjoke", "Get the best dad joke you have seen today")
        .addField("!userinfo", "Get some of your basic discord info")
        .addField("!stats", "Get guild stats")
        .addField(
          "!meme",
          "Get a new meme everytime (Provided by https://github.com/D3vd/Meme_Api/blob/master/README.md)"
        );
      msg.channel.send(embed);
}