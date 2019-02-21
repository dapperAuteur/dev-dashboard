const { assert, expect } = require("chai");
const Tag = require("./../models/tag");
const tagController = require("./tagController");

console.log("Tag");
// console.log(Tag);
console.log("tagController");
// console.log(tagController);

describe("Tag", () => {
  it("confirm tests are working", () => {
    expect(1).to.equal(1);
  });
});
