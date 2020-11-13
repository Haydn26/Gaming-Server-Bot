const fetch = require("node-fetch");

class dadJokes {
  constructor() {}

  async joke() {
    const url = "https://icanhazdadjoke.com/";
    const options = {
      method: "GET",
      headers: {
        Accept: "Application/json",
      },
    };

    const response = await fetch(url, options);
    const jokeJson = await response.json();

    return jokeJson.joke;
  }
}

module.exports = dadJokes;