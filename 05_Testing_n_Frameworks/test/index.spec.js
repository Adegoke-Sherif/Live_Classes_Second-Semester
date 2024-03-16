const util = require("../src/index")

describe("index.js", () => {
  it ("should return true", () => {
    expect(true).toBe(true);
  })

  it("should return the correct name", () => {
    expect(util.getFullName("John", "Doe")).toBe("John Doe");
  })

  it("should return the correct user", () => {
    const user = util.getUser("JohnDoe")
    expect(user).toBeDefined();
    expect(user.username).toBe("JohnDoe");
  })
  it("should throw an exception if no username is provided", () => {
    expect(() => util.getUser()).toThrowError("Username is required");
  })
})