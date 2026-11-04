class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    clearDigits(s) {
        let stack = [];
        let isDigit = (c) => /^\d$/.test(c);
        let clearedStr = "";

        for (let i = 0; i < s.length; i++) {
            if (isDigit(s.charAt(i))) {
                stack.pop();
            } else {
                stack.push(s.charAt(i));
            }
        }

        for (let j = 0; j < stack.length; j++) {
            clearedStr += stack[j];
        }

        return clearedStr;
    }
}
