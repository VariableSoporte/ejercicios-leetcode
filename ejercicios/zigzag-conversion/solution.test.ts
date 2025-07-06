import { convert } from "./solution";

describe('zigzag-conversion test', () => {

  it('returns ACBD for ABCD - 2', () => {
    expect(convert("ABCD",2)).toBe("ACBD");
  });
  it('returns PAHNAPLSIIGYIR for PAYPALISHIRING - 3', () => {
    expect(convert("PAYPALISHIRING",3)).toBe("PAHNAPLSIIGYIR");
  });
  it('returns PAHNAPLSIIGYIR for PAYPALISHIRING - 4', () => {
    expect(convert("PAYPALISHIRING",4)).toBe("PINALSIGYAHRPI");
  });
  it('returns A for A - 1', () => {
    expect(convert("A",1)).toBe("A");
  });
  it('returns ABDC for ABCD - 3', () => {
    expect(convert("ABCD",3)).toBe("ABDC");
  });
 
});
