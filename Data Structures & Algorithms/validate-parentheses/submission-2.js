class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let openToClose = {
            '(': ')',
            '[': ']',
            '{': '}'
        }

        for (let i = 0; i < s.length; i++) {
            let c = s.charAt(i);
            if (openToClose[c]) {
                stack.push(c);
            } else {
                let left = stack.pop();
                let right = c;
                if (openToClose[left] !== right) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
