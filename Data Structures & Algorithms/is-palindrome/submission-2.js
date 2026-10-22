class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let nStr = "#";
        for (let i = 0; i < s.length; i++) {
            let c = s.charAt(i).toLowerCase();
            if ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
                nStr += c;
                nStr += '#';
            }
        }
        let mid = Math.floor(nStr.length / 2);
        let adjustment = 1
        if (nStr.charAt(mid) !== '#') {
            adjustment = 2;
        }
        let left = mid - adjustment;
        let right = mid + adjustment;
        while (
            left >= 0 &&
            right <= nStr.length - 1 &&
            nStr.charAt(left) === nStr.charAt(right)
            ) {
                left -= 2;
                right += 2;
        }

        return left <= 0;
    }
}
