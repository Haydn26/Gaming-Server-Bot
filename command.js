const Filt = require("./Commands/profanityFilter.js");
const EightBall = require("./Commands/eightBall.js");
const Jokes = require("./Commands/dadJokes.js");
const Meme = require("./Commands/Memes.js");
const LastM = require("./Commands/CheckLastMessage.js");
const Help = require("./Commands/Help.js");
const UserInfo = require("./Commands/UserInfo.js");
const GuildStats = require("./Commands/GuildStats.js");
const Reddit = require("./Commands/redditSearch.js");
const HighLow = require("./Commands/HighLow.js");

const filt = new Filt();

const commands = {
  eightball: EightBall,
  dadjoke: Jokes,
  meme: Meme,
  help: Help,
  reddit: Reddit,
  userinfo: UserInfo,
  stats: GuildStats,
  highlow: HighLow,
};

module.exports = function (msg) {
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

    //const userMessage = new LastM(msg);
    //userMessage.spamming();

    if (msg.channel.id == "775468020712996875") {
      if (msg.content.startsWith("!")) {
        let args = msg.content.split(" ");
        const com = args.shift().substring(1);
        if (Object.keys(commands).includes(com)) {
          commands[com](msg);
        }
      }
    }
  } catch(err){
      console.log(err);
  }
};
