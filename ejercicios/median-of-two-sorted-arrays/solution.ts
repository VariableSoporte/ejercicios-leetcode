export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let allNums = [...nums1, ...nums2];
    allNums.sort((a,b)=> b-a);
    const tamanio = allNums.length;
    const residuo = tamanio % 2;
    if (residuo){
        return allNums[(tamanio/2+0.5)-1]
    }else{
        let sop = ((tamanio)/2)-1;
        return (allNums[sop]+allNums[sop+1])/2
    }
};


let result = findMedianSortedArrays([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17]);
console.log("resultado: ",result)
