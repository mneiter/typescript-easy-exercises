export function isPalindrome(x: number): boolean {
  const charArray: string[] = String(x).split('');
  const length: number = charArray.length;

  if (charArray[0] === '-') {
    return false;
  }

  if (length === 1) {
    return true;
  }

  let condition: number = length / 2;
  for (let i = 0; i < condition; i++) {
    if (charArray[i] !== charArray[length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(100)); // true
console.log(isPalindrome(100)); // true
console.log(isPalindrome(-10)); // false

export function isPalindrome2(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversed = 0;
  let original = x;

  while (original > reversed) {
    reversed = reversed * 10 + (original % 10);
    original = Math.floor(original / 10);
  }

  return original === reversed || original === Math.floor(reversed / 10);
}

console.log(isPalindrome2(505)); // true
console.log(isPalindrome2(100)); // false
console.log(isPalindrome2(-10)); // false

/*
9. Palindrome Number
Solved
Easy
Topics
premium lock icon
Companies
Hint
Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
*/
