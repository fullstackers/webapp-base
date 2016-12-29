describe("homepage", function () {
  it("should show proper greeting", function () {
    browser.get("http://localhost:3001/dashboard");
    element(by.model('yourName')).sendKeys('Fullstackers');

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Fullstackers!');
  });

});