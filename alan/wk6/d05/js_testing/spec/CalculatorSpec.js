describe("Calculator", function() {
  describe(".performOperation", function() {
    var calc;
    var result;

    beforeEach(function() {
      calc = new Calculator();
    });

    it("performs addition of two numbers", function() {
      var result = calc.performOperation("add", 2, 3);
      expect(result).toBe(5);
    });

    it('performs subtraction on two numbers', function() {
      var result = calc.performOperation("subtract", 6, 3);
      expect(result).toBe(3);
    });

    it('performs multiplication on two numbers', function () {
      var result = calc.performOperation("multiply", 1, 2);
      expect(result).toBe(2);
    });

    it('performs division on two numbers', function () {
      var result = calc.performOperation('divide', 12, 3);
      expect(result).toBe(4);
    });
  });
});

