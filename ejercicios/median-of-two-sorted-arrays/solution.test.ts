import { findMedianSortedArrays } from "./solution";


describe('findMedianSortedArrays', () => {
  it('returns 2.5 for [1,2] and [3,4]', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  it('returns 2 for [1,3] and [2]', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  it('handles one empty array', () => {
    expect(findMedianSortedArrays([], [1])).toBe(1);
  });
  it('returns 9 for [1,2,3,4,5] and [6,7,8,9,10,11,12,13,14,15,16,17]', () => {
    expect(findMedianSortedArrays([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17])).toBe(9);
  });
});
