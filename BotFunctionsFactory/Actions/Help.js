class Help {
    constructor(client, messageEmbed){
        this.client = client;
        this.messageEmbed = messageEmbed;
    }

    sendHelp(msg){
        const embed = new this.messageEmbed()
        .setTitle("I see you need help")
        .setColor(0xff0000)
        .setDescription(
          "I see you have seeked help from a young wise bot. Here are all the commands you are able to use. Please explore :)"
        )
        .addField(
          "!8-ball",
          "Seek all the answers to your questions! example: !8-ball Is this the best server you have ever seen"
        )
        .addField("!dad-joke", "Get the best dad joke you have seen today")
        .addField("!user-info", "Get some of your basic discord info")
        .addField("!stats", "Get guild stats")
        .addField(
          "!meme",
          "Get a new meme everytime (Provided by https://github.com/D3vd/Meme_Api/blob/master/README.md)"
        );
      msg.channel.send(embed);
    }
}

module.exports = Help;