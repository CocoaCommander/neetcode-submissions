class Solution {
    /**
     * @param {string[]} words
     * @return {string}
     */
    destCity(paths) {
        let startToEnd = {}
        for (let i = 0; i < paths.length; i++) {
            let start = paths[i][0];
            let end = paths[i][1];
            startToEnd[start] = end;
        }

        for (const [start, end] of Object.entries(startToEnd)) {
            if (startToEnd[end] === undefined) {
                return end;
            }
        }
    }
}
