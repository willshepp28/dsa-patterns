/*
  ==================================================
  PHASE 1: UNDERSTAND
  ==================================================

  1. Problem — restate in my own words:
  Given an array of integers and a target, return the indices of the numbers
  that add up to the given target. Return the smallest indice first


  2. Input / Output:
     Input: number[], number
     Output: number[]


  3. Examples:
     Example 1: [1,2,4], 6 return [1,2]
     Example 2: [1,1] , 2 return [0,1]


  4. Clarifying Questions:
     - Can the input be empty? no
     - What should I return if there is no valid answer? theres always a vaid pair


  5. Constraints:
     - must return smallest indice first


  6. Edge Cases:
     - only two values in array
     - negative numbers
     - 


  7. Test Cases I’ll Run:
     - returns indices of pairs that match target
     - retuns indices of pairs with only two in array
     - returns indices of pairs with negative values



  ==================================================
  PHASE 2: STRATEGIZE
  ==================================================

  8. Brute Force Approach:
     1. Create a empty array
     2. Create a nest loop
     3. When match found add smaller indice to array first, than greater
     4. return 


  9. Pattern I Suspect:
     - two pointer


  10. Optimal Approach — explain before coding:
      1. Create two pointers. one at the head of the array one at the end 
      2. Iterate through and if the sum is greater then the target, decrement tail
      3.Iterate through and if the sum is less then the target, increment head
      4. if target match return matching indices



  11. Expected Time / Space:
      Time: 0(n)
      Space: 0(n)



  ==================================================
  DO NOT TOUCH BELOW UNTIL PHASES 1–2 ARE DONE
  ==================================================



  ==================================================
  PHASE 3: BUILD
  ==================================================

  12. Notes While Coding:
      -


  13. Mistakes I Caught:
      -



  ==================================================
  PHASE 4: VERIFY
  ==================================================

  14. Dry Run:
      Test case:
      Trace:


  15. Edge Case Check:
      -


  16. Final Complexity:
      Time:
      Space:


  17. Solved In:
      __ minutes


  18. What I Learned:
      -
*/

export function twoSum(nums: number[], target: number): number[] {
  /**
   * 0. Optimal Approach — explain before coding:
      1. Create two pointers. one at the head of the array one at the end 
      2. Iterate through and if the sum is greater then the target, decrement tail
      3.Iterate through and if the sum is less then the target, increment head
      4. if target match return matching indices
   */
  let head = nums[0];
  let tail = nums.length - 1;

  while (head < tail) {
    if (head + tail === target) {
      return [head, tail];
    }

    if (head + tail > target) {
      head++;
    }

    if (head + tail < target) {
      tail--;
    }
  }
}
