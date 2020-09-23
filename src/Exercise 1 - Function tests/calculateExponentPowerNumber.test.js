import { calculateExponentPowerNumber } from "./calculateExponentPowerNumber";

describe("calculateExponentPowerNumber - func", () => {
  it("returns 1 when exponent is 0", () => {
    expect(calculateExponentPowerNumber(0, 0)).toBe(1);
    expect(calculateExponentPowerNumber(1, 0)).toBe(1);
    expect(calculateExponentPowerNumber(3, 0)).toBe(1);
  });
  it("returns 27 when x is 3 and y is 3", () => {});
  it("returns 0.25 when x is 2 and y is -2", () => {});
  it("throws an exeption when x is not a number", () => {
    try {
      calculateExponentPowerNumber("a", 1);
    } catch (e) {
      expect(e.message).toBe('Expected a number');
    }
  });
  it("throws an exeption when y is not a number", () => {
  })
});
