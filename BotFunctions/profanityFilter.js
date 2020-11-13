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
      "dick",
    ];
  }

  profanity(msg) {
    const punctuationless = msg.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const finalString = punctuationless.replace(/\s{2,}/g," ");
    let words = finalString.split(" ");
    console.log(words);
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
