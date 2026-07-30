class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let res: number[] = new Array(temperatures.length).fill(0);
        let stack: number[][] = new Array<number[]>();
        
        for (let i = 0; i < temperatures.length; i++) {
            let temp = temperatures[i];
            while (stack.length > 0 && temp > stack[stack.length - 1][0]) {
                let [_, stackIdx] = stack.pop();
                res[stackIdx] = i - stackIdx;
            }
            stack.push([temp, i])
        }
        return res;
    }
}
