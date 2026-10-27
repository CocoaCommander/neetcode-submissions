class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;
        let seenToIdx = {};
        let subStrStart = 0;
        let subStrEnd = 0;
        for (let i = 0; i < s.length; i++) {
            if (s.charAt(i) in seenToIdx) {
                subStrStart = Math.max(seenToIdx[s.charAt(i)] + 1, subStrStart);
                seenToIdx[s.charAt(i)] = i;
            } else {
                seenToIdx[s.charAt(i)] = i;
            }

            subStrEnd++;

            res = Math.max(res, subStrEnd - subStrStart);
        }

        return res;
    }
}
