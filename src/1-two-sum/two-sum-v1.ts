export function twoSum(nums: number[], target: number): number[] {
  for(const [i, first] of nums.entries()) {
    for(const [j, second] of nums.entries()) {
      if(i !== j && first + second === target) return [i, j]
    }
  }
  return [0, 0]
};

// Tests
console.log('[2,7,11,15], 9', 'expected:', [0,1], 'actual:', twoSum([2,7,11,15], 9))
console.log('[3,2,4], 6', 'expected:', [1,2], 'actual:', twoSum([3,2,4], 6))
console.log('[3,3], 6', 'expected:', [0,1], 'actual:', twoSum([3,3], 6))