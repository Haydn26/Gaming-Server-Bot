module.exports = function(guildInfo){
    const name = guildInfo.user.username;
    const joinedTime = parseTime(guildInfo.joinedTimestamp);
    let roles = [];
    for (let i = 0; i < guildInfo._roles.length; i++){
        roles.push(guildInfo.guild.roles.cache.get(guildInfo._roles[i]).name);
    }
    const isBot = guildInfo.user.bot ? true : false;

    const userData = {
        Username: name,
        Joined: joinedTime,
        Roles: roles,
        Bot: isBot
    }

    return userData;
}

function parseTime(timeStamp){
    const joinedDate = new Date(timeStamp);
    const dateNow = new Date();

    const diff = dateNow.getTime() - joinedDate.getTime();
    const seconds = Math.floor(diff / 1000);
    return Math.floor(seconds / 86400);

}