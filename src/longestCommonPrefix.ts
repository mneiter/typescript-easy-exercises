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
