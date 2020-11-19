const eightBall = require("../eightBall.js");


test("No question asked", () => {
    expect(new eightBall().response("!8-ball")).toBe("Please ask a question");
})