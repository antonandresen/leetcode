export function romanToInt(s: string): number {
  const romanValuesMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])

  let sum = 0
  let minus: number = 0
  for(let i = 0; i < s.length; i++) {
    const current = romanValuesMap.get(s[i]!)!
    const next = romanValuesMap.get(s[i+1]!) || 0

    if(minus) {
      sum += current - minus
      minus = 0
      continue
    }

    if(next > current) {
      minus = current
      continue
    }

    sum += current
  }

  return sum
}

// Tests
console.log('III', 'expected:', 3, 'actual:', romanToInt('III'))
console.log('LVIII', 'expected:', 58, 'actual:', romanToInt('LVIII'))
console.log('MCMXCIV', 'expected:', 1994, 'actual:', romanToInt('MCMXCIV'))