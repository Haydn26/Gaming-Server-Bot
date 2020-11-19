const profanityFilter = require("../profanityFilter.js");

test("Profanity found, return True", () => {
  expect(new profanityFilter().profanity("fuck")).toBeTruthy();
});

test("Profanity not found, return false", () => {
  expect(new profanityFilter().profanity("hello")).toBeFalsy();
});

test("Full sentence, profanity found, return true", () => {
  const profSentence = "You are fucking cunt, you absoulte dick!";
  expect(new profanityFilter().profanity(profSentence)).toBeTruthy();
});

test("Full sentence, profanity not found, return false", () => {
  const nonProfSentence =
    "Hello there, my name is jest, and I am testing your function!";
  expect(new profanityFilter().profanity(nonProfSentence)).toBeFalsy();
});

test("Very long test with profanity, return true", () => {
  const longSentence =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, fuck quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    expect(new profanityFilter().profanity(longSentence)).toBeTruthy();
});
