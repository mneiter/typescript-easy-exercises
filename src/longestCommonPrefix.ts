export function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return '';

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
}

export function longestCommonPrefix2(strs: string[]): string {
  let arrayOfWord: string[] = strs[0].split('');
  let commonPrefix: string = '';

  for (let i = 0; i < arrayOfWord.length; i++) {
    commonPrefix += arrayOfWord[i];
    for (let j = 0; j < strs.length; j++) {
      if (!strs[j].startsWith(commonPrefix)) {
        return commonPrefix.slice(0, -1);
      }
    }
  }

  return commonPrefix;
}

/*
14. Longest Common Prefix
Solved
Easy
Topics
premium lock icon
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
*/
