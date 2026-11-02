class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let numSrs = 0;
        for (let i = 0; i < details.length; i++) {
            let data = details[i];
            let age = parseInt(data.charAt(11)) * 10 + parseInt(data.charAt(12))
            if (age > 60) {
                numSrs++
            }
        }
        return numSrs;
    }
}
