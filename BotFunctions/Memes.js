const fetch = require("node-fetch");

class Memes {
    
  async getMeme() {
    const Url = "https://meme-api.herokuapp.com/gimme";
    const response = await fetch(Url);
    const json = await response.json();
    return json.url;
  }
}

module.exports = Memes;
