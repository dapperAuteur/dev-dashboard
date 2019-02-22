// const { assert, expect } = require("chai");
const mockCallback = jest.fn(x => 42 + x);

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
forEach([0, 1], mockCallback);

console.log("Tag");
// console.log(Tag);
console.log("tagController");
// console.log(tagController);

describe("Test Setup", () => {
  it("confirm tests are working", () => {
    expect(1).toBe(1);
    expect(1 + 1).toBe(2);
    expect(1).not.toBe(2);
  });
});

describe("Mock Function is set up", () => {
  it("forEach callback adds 42 to each number", () => {
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe(42);
    expect(mockCallback.mock.results[1].value).toBe(43);
  });
});
