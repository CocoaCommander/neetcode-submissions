class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let res: string = strs[0];
        let prefixLength: number = strs[0].length;
        for (let i = 1; i < strs.length; i++) {
            prefixLength = Math.min(prefixLength, strs[i].length);
            let j = 0;
            for (j; j < prefixLength; j++) {
                if (strs[i].charAt(j) !== res.charAt(j)) {
                    break;
                }
            }
            res = res.substring(0, j);
        }
        return res;
    }
}
