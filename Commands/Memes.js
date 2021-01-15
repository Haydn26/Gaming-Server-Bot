const fetch = require("node-fetch");

module.exports = async function(msg){
  const Url = "https://meme-api.herokuapp.com/gimme";
  const response = await fetch(Url);
  const json = await response.json();
  msg.channel.send(json.url);
}