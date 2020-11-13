const Fnc = require("./botFunctions/eightBall.js");
const Jokes = require("./BotFunctions/dadJokes.js");
const sInfo = require("./BotFunctions/senderInfo.js");
const Filt = require("./BotFunctions/profanityFilter.js");
const Meme = require("./BotFunctions/Memes.js");
const { Client, MessageEmbed } = require("discord.js");

const fnc = new Fnc();
const jokes = new Jokes();
const info = new sInfo();
const filt = new Filt();
const meme = new Meme();
const client = new Client();

console.log("Initialising Gaming Server Bot");

client.login("Nzc1NDM2MDkzMDU4NTgwNTAx.X6mTIw.GBcMcYM2z9eqb8Nd_aOztXOWxrE");

client.on("ready", () => {
  client.channels.cache
    .find((channel) => channel.name === "bot")
    .send("Hello there! I am online and ready to help!");
});

client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === "general"
  );
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on("message", async (msg) => {
  try {
    if (msg.author != "Gaming Server Application") {
      const swearing = filt.profanity(msg.content);
      if (swearing) {
        msg.reply("Please watch your language. It is not tolerated here!!");
        msg.channel.send(
          "https://tenor.com/view/watch-your-profanity-funny-gif-5600117"
        );
        msg.delete();
        return;
      }
    }

    if (msg.channel.id == "775468020712996875") {
      if (msg.content == "!help") {
        const embed = new MessageEmbed()
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
        return;
      }

      if (msg.content == "!dad-joke") {
        msg.reply(await jokes.joke());
        return;
      }

      if (msg.content.startsWith("!user-info")) {
        const guildMembers = msg.channel.guild.members.cache;
        const senderID = msg.author.id;
        const guildInfo = guildMembers.get(senderID);
        const userInfo = info.userInfo(guildInfo);

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
        return;
      }

      if (msg.content.startsWith("!8-ball")) {
        msg.reply(fnc.response(msg.content));
        return;
      }

      if (msg.content === "!stats") {
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
        return;
      }

      if (msg.content === "!meme") {
        msg.channel.send(await meme.getMeme());
        return;
      }
    }
  } catch (err) {
    console.log(err);
  }
});
