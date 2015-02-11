describe('romanNums', function(){
  it("returns 'M' if user input 1,000", function(){
    expect(romanNums(1000)).to.equal("M");
  });

  it("returns 'D' if user input 500", function() {
    expect(romanNums(500)).to.equal("D");
  });

  it("returns 'DC' if user input 600", function() {
    expect(romanNums(600)).to.equal("DC");
  });

  it("retuns 'MDCL' if user input is 1650", function() {
    expect(romanNums(1650)).to.equal("MDCL");
  });

  it("returns 'MDCLX' if user input is 1660", function() {
    expect(romanNums(1660)).to.equal("MDCLX");
  });

  it("returns 'MDCLXV' if user input is 1665", function() {
    expect(romanNums(1665)).to.equal("MDCLXV");
  });

  it("returns 'MDCLXVI' if user input is 1666", function() {
    expect(romanNums(1666)).to.equal("MDCLXVI");
  });
});
