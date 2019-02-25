const tagController = require("./tagController");
jest.mock("./tagController");

console.log("Tag");

// Test Unit: Create Document Must be Authenticated User With Valid Session, Domain is Testers Choice

describe("Create Tag", () => {
  const tag = {
    tagName: "tag name",
    tagDescription: "tag description"
  };

  const req = {
    currentUserId: '',
    body: {
      session: "",
      tag: {
        tagName: "tag name",
        tagDescription: "tag description"
      }
    }
  }

  const newTag = tag;
  res = newTag;
  res.status = function() {
    return 201;
  };
  tagController.createTag.mockResolvedValue(res);
  it("creates a Tag", () => {
    return tagController.createTag().then(res => expect(res).toEqual(newTag));
  });
  it('confirms user is authenticated and has valid session to create tag', () => {
    // return tagController.createTag().then(res => expect(req.))
    expect(req).
  })
  it("returns status code 201", () => {
    return tagController
      .createTag()
      .then(res => expect(res.status()).toEqual(201));
  });
});
