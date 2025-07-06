import { myAtoi } from "./solution";


describe('string-to-integer test', () => {

  it('returns 42 for 42', () => {
    expect(myAtoi("42")).toBe(42);
  });
  it('returns -042 for 42', () => {
    expect(myAtoi("   -042")).toBe(-42);
  });
  it('returns 1337c0d3 for 1337', () => {
    expect(myAtoi("1337c0d3")).toBe(1337);
  });
  it('returns 0-1 for 0', () => {
    expect(myAtoi("0-1")).toBe(0);
  });
  it('returns words and 987 for 0', () => {
    expect(myAtoi("words and 987")).toBe(0);
  });
  it('returns -91283472332 for -2147483648', () => {
    expect(myAtoi("-91283472332")).toBe(-2147483648);
  });
  it('returns    +0 123 for 0', () => {
    expect(myAtoi("   +0 123")).toBe(0);
  });
  
 
});
