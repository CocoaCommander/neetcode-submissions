class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const A: number = "a".charCodeAt(0);
        let anagramTracker = new Map<string, string[]>();
        let res: string[][] = [];

        for (let i = 0; i < strs.length; i++) {
            let charCount: number[] = new Array(26).fill(0);

            for (let j = 0; j < strs[i].length; j++) {
                let idx: number = strs[i].charCodeAt(j) - A;
                charCount[idx] += 1;
            }

            let key: string = charCount.join();
            if (anagramTracker.has(key)) {
                anagramTracker.get(key).push(strs[i]);
            } else {
                anagramTracker.set(key, [strs[i]]);
            }
        }

        anagramTracker.forEach((value, _) => res.push(value));
        return res;
    }
}
