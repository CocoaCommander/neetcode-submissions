class Solution {
    /**
     * @param {number[]} target
     * @param {number[]} arr
     * @return {boolean}
     */
    canBeEqual(target, arr) {
        let targetFreq = new Map();
        let arrFreq = new Map();

        for (let i = 0; i < target.length; i++) {
            if (!targetFreq.has(target[i])) {
                targetFreq.set(target[i], 1);
            } else {
                let newTargetFreq = targetFreq.get(target[i]) + 1;
                targetFreq.set(target[i], newTargetFreq);
            }

            if (!arrFreq.has(arr[i])) {
                arrFreq.set(arr[i], 1);
            } else {
                let newArrFreq = arrFreq.get(arr[i]) + 1;
                arrFreq.set(arr[i], newArrFreq);
            }
        }

        for (const [key, val] of targetFreq) {
            if (!arrFreq.has(key) || arrFreq.get(key) !== val) {
                return false;
            }
        }

        return true;
    }
}
