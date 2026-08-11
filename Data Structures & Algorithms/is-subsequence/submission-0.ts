class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        let sIdx: number = 0;
        let substring: string = "";

        if (s.length > t.length) {
            return false;
        }

        for (let i = 0; i < t.length; i++) {
            if (t.charAt(i) === s.charAt(sIdx)) {
                substring += t.charAt(i);
                sIdx++;
            }
        }

        return substring === s;
    }
}
