class eightBall {
  constructor() {
    this.responses = [
      "As I see it, yes.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don’t count on it.",
      "It is certain.",
      "It is decidedly so.",
      "Most likely.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Outlook good.",
      "Reply hazy, try again.",
      "Signs point to yes.",
      "Very doubtful.",
      "Without a doubt.",
      "Yes.",
      "Yes – definitely.",
      "You may rely on it.",
    ];
  }

  response(msg) {
    let question = msg.split(" ").splice(1, 0).join(" ");
    if (question == "!8-ball ") {
      return "Please ask a question";
    } else {
      const index = Math.floor(Math.random() * this.responses.length);
      return this.responses[index];
    }
  }
}

module.exports = eightBall;
