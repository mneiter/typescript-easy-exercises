export function romanToInt(s: string): number {
  const roman: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = roman[s[i]];
    const next = roman[s[i + 1]] ?? 0;
    if (curr < next) {
      result -= curr;
    } else {
      result += curr;
    }
  }
  return result;
}

export function romanToInt2(s: string): number {
  const romanMapper: Map<string, number> = new Map<string, number>();
  romanMapper.set('I', 1);
  romanMapper.set('V', 5);
  romanMapper.set('X', 10);
  romanMapper.set('L', 50);
  romanMapper.set('C', 100);
  romanMapper.set('D', 500);
  romanMapper.set('M', 1000);

  const romanArray: string[] = s.split('');
  let result: number = 0;
  let prevKey: string = '';
  let value = 0;

  romanArray.forEach((key, i) => {
    console.log(`Processing character: ${key}, Previous character: ${prevKey}`);
    if (
      (prevKey === 'I' && (key === 'V' || key === 'X')) ||
      (prevKey === 'X' && (key === 'L' || key === 'C')) ||
      (prevKey === 'C' && (key === 'D' || key === 'M'))
    ) {
      switch (key) {
        case 'V':
        case 'X':
          value = (romanMapper.get(key) ?? 0) - (romanMapper.get('I') ?? 0) * 2;
          break;
        case 'L':
        case 'C':
          value = (romanMapper.get(key) ?? 0) - (romanMapper.get('X') ?? 0) * 2;
          break;
        case 'D':
        case 'M':
          value = (romanMapper.get(key) ?? 0) - (romanMapper.get('C') ?? 0) * 2;
          break;
        default:
          value = romanMapper.get(key) ?? 0;
          break;
      }
    } else {
      value = romanMapper.get(key) ?? 0;
    }

    console.log(`Current value: ${value}, Result so far: ${result}`);
    prevKey = key;
    result += value;
  });

  return result;
}

/*
13. Roman to Integer
Easy
Topics
premium lock icon
Companies
Hint
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/
