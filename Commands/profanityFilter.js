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
    const str = RemovePunc(msg);
    const words = str.split(" ");
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

function RemovePunc(str){
  const punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  return punctuationless.replace(/\s{2,}/g," ");
}
