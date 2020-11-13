class profanityFilter {
  constructor() {
    this.prof = [
      "fuck",
      "shit",
      "bastard",
      "twat",
      "cunt",
      "fucking",
      "nigger",
      "shitting",
      "wank",
      "wanker",
      "tosser",
    ];
  }

  profanity(msg) {
    let words = msg.split(" ");
    let swearing = false;

    this.prof.forEach((swear) => {
      for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === swear) {
          swearing = true;
          break;
        }
      }
    });

    return swearing;
  }
}

module.exports = profanityFilter;
