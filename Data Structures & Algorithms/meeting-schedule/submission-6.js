/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        let meetings = new Array(1000000).fill(0);

        for (let i = 0; i < intervals.length; i++) {
            let start = intervals[i].start;
            let end = intervals[i].end;

            for (let j = start; j <= end; j++) {
                if (meetings[j] === 1 && meetings[j + 1] === 1) {
                    return false;
                }
                meetings[j] = 1;
            }
        }
        return true;
    }
}
