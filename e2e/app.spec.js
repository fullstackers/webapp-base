describe("homepage", function () {
  it("should show proper greeting", function () {
    browser.get("http://localhost:3001/dashboard");
    element(by.model('yourName')).sendKeys('Julie');

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
  });

});