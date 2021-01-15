const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");


module.exports = async function(msg){
    let data;
    const subReddit = msg.content.split(" ");
    
    data =
        subReddit.length > 1 && subReddit[1].startsWith("r/")
        ? await getSubredditContent(subReddit[1])
        : await getTopContent();
    
        // console.log(data.data.children[0].data.link_flair_richtext);
    
    for (let i = 0; i < 5; i++) {
        let postData = data.data.children[i];
        const postEmbed = new MessageEmbed().setTitle(postData.data.title).setDescription(postData.data.link_flair_richtext);
        msg.channel.send(postEmbed);
    }
}

async function getSubredditContent(subreddit){
    const url = `https://www.reddit.com/${subreddit}.json`
    const response = await fetch(url);
    return await response.json();
}

async function getTopContent(){
    const url = "https://reddit.com/top.json";
    const response = await fetch(url);
    return await response.json();
}