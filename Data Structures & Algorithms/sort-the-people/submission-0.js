class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */
    sortPeople(names, heights) {
        let heightsToNames = {};
        let res = [];
        for (let i = 0; i < names.length; i++) {
            heightsToNames[heights[i]] = names[i];
        }

        heights.sort((a, b) => b - a);

        for (let j = 0; j < heights.length; j++) {
            res.push(heightsToNames[heights[j]]);
        }

        return res;
    }
}
