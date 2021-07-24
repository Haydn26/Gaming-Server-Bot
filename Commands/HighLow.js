let correct;
let stillPlaying = false;
let numbers = [];

module.exports = function HighLow(msg) {
  const content = msg.content;

  try {
    if (!stillPlaying && content.length == 8) {
      stillPlaying = true;
      msg.reply(
        "Welcome to high low! The rules are simple, just respond with !HighLow and your guess. For example '!HighLow lower', the numbers go from 1 - 13"
      );
      numbers.push(randomNumber(numbers[numbers.length - 1]));
      msg.reply(
        `Your first number is ${numbers[numbers.length - 1]}. Higher or lower?`
      );
    } else if (stillPlaying && content.length > 8) {
        numbers.push(randomNumber(numbers[numbers.length - 1]));
      let guess = content.split(" ")[1].toLowerCase();

      switch (guess) {
        case "lower":
          correct =
            numbers[numbers.length - 1] < numbers[numbers.length - 2]
              ? true
              : false;
          break;
        case "higher":
          correct =
            numbers[numbers.length - 1] > numbers[numbers.length - 2]
              ? true
              : false;
          break;
      }

      if (correct) {
        msg.reply(
          `Correct! The number was ${
            numbers[numbers.length - 1]
          }. Higher or Lower?`
        );
      } else {
        msg.reply(
          `Sorry, that was incorrect, the number was ${
            numbers[numbers.length - 1]
          }`
        );
        stillPlaying = false;
        numbers = [];
      }
    } else if (stillPlaying && content.length <= 8) {
      msg.reply("Please repond with !HighLow and your guess");
    }
  } catch (e) {
    console.log(e);
  }
};

function randomNumber(OldNum) {
  let newNum = Math.floor(Math.random() * 13);
  if (newNum != OldNum) {
    return newNum;
  } else randomNumber(numbers[numbers.length - 1]);
}
