class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack, needle) {
        for (let i = 0; i < haystack.length; i++) {
            if (
                haystack.charAt(i) === needle.charAt(0) &&
                i + needle.length <= haystack.length &&
                haystack.substring(i, i + needle.length) === needle
            ) {
                return i;
            }
        }
        return -1;
    }
}
