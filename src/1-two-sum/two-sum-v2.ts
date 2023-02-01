export function twoSum(nums: number[], target: number): number[] {
  const remainders = new Map<number, number>()
  for(let i = 0; i < nums.length; i++) {
    if(remainders.has(target - nums[i]!)) return [remainders.get(target - nums[i]!)!, i]

    remainders.set(nums[i]!, i)
  }
  return [0, 0]
};

// Tests
console.log('[2,7,11,15], 9', 'expected:', [0,1], 'actual:', twoSum([2,7,11,15], 9))
console.log('[3,2,4], 6', 'expected:', [1,2], 'actual:', twoSum([3,2,4], 6))
console.log('[3,3], 6', 'expected:', [0,1], 'actual:', twoSum([3,3], 6))