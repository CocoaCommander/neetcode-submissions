class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        // track chars w array
        const charCount = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            let idxOfS: number = s.charCodeAt(i) - "a".charCodeAt(0);
            let idxOfT: number = t.charCodeAt(i) - "a".charCodeAt(0);

            charCount[idxOfS]++;
            charCount[idxOfT]--;
        }

        return charCount.every((val) => val === 0);
    }
}
