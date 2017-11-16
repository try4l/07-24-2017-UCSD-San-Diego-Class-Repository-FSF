var PageUtilities = require("../src/PageUtilities");
var expect = require("chai").expect;

describe("pageUtilities", function() {
  var pageUtilities = new PageUtilities(10, 3);

  it("should keep track of how many pages are in the blog", function() {
    expect(pageUtilities.posts).to.equal(10);
  });

  it("should keep track of the blog's pagination limit", function() {
    expect(pageUtilities.pagination).to.equal(3);
  });

  it("should keep track of the blog's total page count", function() {
    expect(pageUtilities.totalPages()).to.equal(4);
  });

  describe("should determine how many posts are on page number n", function() {
    it("should determine how many posts are on a middle page", function() {
      // Third page has 3 items.
      expect(pageUtilities.postsOnPage(3)).to.equal(3);
    });

    it("should determine how many posts are on the last page", function() {
      // Fourth page has 1 item.
      expect(pageUtilities.postsOnPage(4)).to.equal(1);
    });

    it("should handle the error case gracefully", function() {
      // Fifth page does not exist. You could also choose to throw, or return 0.
      expect(pageUtilities.postsOnPage(5)).to.equal(-1);
    });
  });
});
