require("dotenv").config();
const { Client, MessageEmbed } = require("discord.js");
const MemberAdd = require("./Commands/MemberAdd.js");


const client = new Client();
const memberAdd = new MemberAdd(client);
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

const commandHandler = require("./command");

client.on("message", commandHandler);