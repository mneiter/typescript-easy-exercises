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
