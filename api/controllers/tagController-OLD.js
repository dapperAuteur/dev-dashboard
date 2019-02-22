// const { assert, expect } = require("chai");
const Tag = require("./../models/tag");
const tagController = require("./tagController");
// const mockMockFnCreate = jest.fn((req, res) => {
//   Tag.create(req.body).then(function(newTag) {
//     res.status(201).json({ newTag });
//   });
// });
const mockMockFnCreate = jest.fn((req, res) => {
  let newTag = req.body;
});
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
    let req = {};
    req.body = tag;

    const newTag = tagController.mockMockFnCreate(req, res);
    let res = { newTag };
    console.log("tag", tag);
    console.log("newTag", newTag);
    expect(mockMockFnCreate.mock.results[0].value).toBe(42);
    // expect(tag).toEqual(newTag);
    // expect(tag).toBe(newTag);
  });
});
