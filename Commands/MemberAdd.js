class MemberAdd{
    constructor(client){
        this.client = client;
    }

    welcomeMember(channel){
        const Channel = channel.guild.channels.cache.find(
            (ch) => ch.name === "general"
          );
          if (!channel) return;
          Channel.send(`Welcome to the server, ${member}`);
    }
    
}

module.exports = MemberAdd;