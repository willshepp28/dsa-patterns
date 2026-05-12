/*
  ==================================================
  PHASE 1: UNDERSTAND
  ==================================================

  1. Problem — restate in my own words:
     - Give an array of numbers and a target to which those numbers should add up to
      return the indices of the pair of values in that array that add up to the target

  2. Input / Output:
     Input: nums =  [1,2,3], target = 5
     Output: [1,2]

  3. Clarifying Questions & Edge Cases:
     -

  ==================================================
  PHASE 2: STRATEGIZE
  ==================================================

  4. Approach:
     -

  5. Expected Time / Space:
     Time:
     Space:

  ==================================================
  DO NOT TOUCH BELOW
  ==================================================

  ==================================================
  PHASE 3: BUILD
  ==================================================

  6. Notes While Coding:
     -

  ==================================================
  PHASE 4: VERIFY
  ==================================================

  7. Dry Run:
     Test case:
     Trace:

  8. Final Complexity:
     Time:
     Space:

  9. Solved In:
     __ minutes

  10. What I Learned:
      -
*/

export function twoSum(nums: number[], target: number): number[] {
  /**
   * Create the hash map
   * Iterate through nums array
   * Check if current index minus target exists in map
   * If so return the indices of both current indice and the matching indice in hashp
   * If not store values and indice in hash map
   */
  const map = new Map();

  for (let index = 0; index < nums.length; index++) {
    // check if target minus current index is in array
    let match = target - nums[index];

    // if so return curent index and matched index
    if (map.get(match) !== undefined) {
      return [index, map.get(match)];
    }

    // if not add current values and index to map
    map.set(nums[index], index);
  }
  return [];
}
