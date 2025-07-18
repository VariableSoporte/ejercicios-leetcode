import { isMatch } from "./solucion";

describe("palindrome number test", () => {
  it("Entrada aa - a salida false", () => {
    expect(isMatch("aa","a")).toBe(false);
  });
  it("Entrada aa - a* salida true", () => {
    expect(isMatch("aa","a*")).toBe(true);
  });
  it("Entrada ab - .* salida true", () => {
    expect(isMatch("ab",".*")).toBe(true);
  });
  it("Entrada aab - c*a*b salida true", () => {
    expect(isMatch("aab","c*a*b")).toBe(true);
  });

});
