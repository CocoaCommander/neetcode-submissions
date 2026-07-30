class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack: number[] = new Array(tokens.length);

        for (let i = 0; i < tokens.length; i++) {
            if (!Number.isNaN(parseInt(tokens[i]))) {
                stack.push(parseInt(tokens[i]));
            } else {
                let x: number = stack.pop();
                let y: number = stack.pop();
                switch(tokens[i]) {
                    case "+":
                        stack.push(y + x);
                        break;
                    case "-":
                        stack.push(y - x);
                        break;
                    case "*":
                        stack.push(y * x);
                        break;
                    default:
                        stack.push((Math.trunc(y / x)));
                        break;
                }
            }
        }
        return stack.pop();
    }
}
