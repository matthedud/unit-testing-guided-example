const { multiply } = require("../calculator");

describe("Multiply", () => {
  test("should multiply two integers correctly", () => {
    const result = multiply(2, 2);
    expect(result).toBe(4);
  });

  test("should multiply two floating point numbers correctly", () => {
    const result = multiply(1.5, 2.5);
    expect(result).toBe(3.75);
  });

  test("should multiply a negative and a positive number correctly", () => {
    const result = multiply(-1.5, 2.5);
    expect(result).toBe(-3.75);
  });

  test("should multiply 0 and a number correctly", () => {
    const result = multiply(0, 2.5);
    expect(result).toBe(0);
  });

  test("should multiply 0 and a number correctly", () => {
    const result = multiply(3, 0);
    expect(result).toBe(0);
  });

  test("should return 0 when function is called without arguments", () => {
    const result = multiply();
    expect(result).toBe(0);
  });

  test("should multiply a value with 1 when function is called with a single argument", () => {
    const result = multiply(26);
    expect(result).toBe(26);
  });
});
