const fetch = require("node-fetch");

module.exports = async function (msg){
    const url = "https://icanhazdadjoke.com/";
    const options = {
      method: "GET",
      headers: {
        Accept: "Application/json",
      },
    };

    const response = await fetch(url, options);
    const jokeJson = await response.json();

    msg.reply(jokeJson.joke);
}