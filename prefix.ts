export default class Prefix {
  // strs = ["flower","flow","flight"]
  // strs = ["dog","racecar","car"]
  public find(values: string[]): string {
    let prefix = '';
    for (let x = 0; x < values.length; x++) {
      if (x === 0) prefix = values[x];
      else {
        const chars = Array.from(values[x]);
        let newPrefix = '';
        for (let i = 0; i < Math.min(prefix.length, chars.length); i++) {
          if (chars[i] === prefix[i]) {
            newPrefix += chars[i];
          }
        }
        prefix = newPrefix;
      }
    }
    return prefix;
  }
}
