const fetch = require("node-fetch");

class redditSearch {

    async getSubredditContent(subreddit){

        console.log('In subreddit fetch');

        const url = `https://www.reddit.com/${subreddit}.json`
        const response = await fetch(url);
        return await response.json();
    }

    async getTopContent(){

        console.log('In top fetch');

        const url = "https://reddit.com/top.json";
        const response = await fetch(url);
        return await response.json();
    }

}

module.exports = redditSearch;