require("dotenv").config();
const Fnc = require("./BotFunctionsFactory/helpers/eightBall.js");
const Jokes = require("./BotFunctionsFactory/helpers/dadJokes.js");
const Filt = require("./BotFunctionsFactory/helpers/profanityFilter.js");
const Meme = require("./BotFunctionsFactory/helpers/Memes.js");
const LastM = require("./BotFunctionsFactory/helpers/CheckLastMessage.js");
const MemberAdd = require("./BotFunctionsFactory/Actions/MemberAdd.js");
const Help = require("./BotFunctionsFactory/Actions/Help.js");
const UserInfo = require("./BotFunctionsFactory/Actions/UserInfo.js");
const GuildStats = require("./BotFunctionsFactory/Actions/GuildStats.js");
const Reddit = require("./BotFunctionsFactory/helpers/redditSearch.js");
const { Client, MessageEmbed } = require("discord.js");

const client = new Client();
const fnc = new Fnc();
const jokes = new Jokes();
const filt = new Filt();
const meme = new Meme();
const lastM = new LastM();
const reddit = new Reddit();
const help = new Help(client, MessageEmbed);
const memberAdd = new MemberAdd(client);
const userInfo = new UserInfo(client, MessageEmbed);
const guildStats = new GuildStats(client, MessageEmbed);
const token = process.env.DISCORD_TOKEN;

console.log("Initialising Gaming Server Bot");

client.login(token);

client.on("ready", () => {
  client.channels.cache
    .find((channel) => channel.name === "bot")
    .send("Hello there! I am online and ready to help!");
});

client.on("guildMemberAdd", (member) => {
  memberAdd.welcomeMember(member);
});

client.on("message", async (msg) => {
  try {
    const swearing = filt.profanity(msg.content);
    if (swearing) {
      msg.reply("Please watch your language. It is not tolerated here!!");
      msg.channel.send(
        "https://tenor.com/view/watch-your-profanity-funny-gif-5600117"
      );
      msg.delete();
      return;
    }

    if (msg.channel.id == "775468020712996875") {
      if (msg.content == "!help") {
        help.sendHelp(msg);
        return;
      }

      if (msg.content == "!dad-joke") {
        msg.reply(await jokes.joke());
        return;
      }

      if (msg.content.startsWith("!user-info")) {
        userInfo.sendUserInfo(msg);
        return;
      }

      if (msg.content.startsWith("!8-ball")) {
        msg.reply(fnc.response(msg.content));
        return;
      }

      if (msg.content === "!stats") {
        guildStats.online(msg);
        return;
      }

      if (msg.content === "!meme") {
        msg.channel.send(await meme.getMeme());
        return;
      }

      if (msg.content.startsWith("!reddit")) {
        let data;
        const subReddit = msg.content.split(" ");

        data =
          subReddit.length > 1 && subReddit[1].startsWith("r/")
            ? await reddit.getSubredditContent(subReddit[1])
            : await reddit.getTopContent();

          console.log(data.data.children[0].data.link_flair_richtext);

        for (let i = 0; i < 5; i++) {
          let postData = data.data.children[i];
          const postEmbed = new MessageEmbed().setTitle(postData.data.title).setDescription(postData.data.link_flair_richtext);
          msg.channel.send(postEmbed);
        }

        return;
      }
    }
  } catch (err) {
    console.log(err);
  }
});
