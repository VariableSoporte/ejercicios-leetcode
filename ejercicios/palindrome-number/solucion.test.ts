import { isPalindrome } from "./solucion";

describe("palindrome number test", () => {
  it("Entrada 121 salida true", () => {
    expect(isPalindrome(121)).toBe(true);
  });
  it("Entrada -121 salida false", () => {
    expect(isPalindrome(-121)).toBe(false);
  });
  it("Entrada 10 salida false", () => {
    expect(isPalindrome(10)).toBe(false);
  });
});
