// const { assert, expect } = require("chai");
const Tag = require("./../models/tag");
const tagController = require("./tagController");
const mockMockFn = jest.fn();
// jest.mock(tagController.createTag);
tagController;
console.log("Tag");
// console.log(Tag);
console.log("tagController");
// console.log(tagController);

// Test Unit: Create Document Must be Authenticated User With Valid Session, Domain is Testers Choice

describe("Create Tag", () => {
  it("creates a Tag", () => {
    const tag = {
      tagName: "tag name",
      tagDescription: "tag description"
    };

    const newTag = tagController.createTag(tag);
    console.log("tag", tag);
    console.log("newTag", newTag);
    expect(tag).toEqual(newTag);
    expect(tag).toBe(newTag);
  });
});
