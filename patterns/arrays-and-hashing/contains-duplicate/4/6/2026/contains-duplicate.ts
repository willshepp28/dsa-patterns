/*
  ==================================================
  PHASE 1: UNDERSTAND
  ==================================================

  1. Problem — restate in my own words:
- Given an array of numbers return true if any of the numbers appear more then once

  2. Input / Output:
     Input: number[]
     Output: boolean


  3. Examples:
     Example 1: [1,2,3,1] returns true
     Example 2: [1,3] returns false


  4. Clarifying Questions:
     - Can the input be empty? return false
     - What should I return if there is no valid answer? return false


  5. Constraints:


  6. Edge Cases:
     - negatives
     - empty values


  7. Test Cases I’ll Run:
     - when duplicates exist
     - when duplicates dont exist
     - emtpy values
     - negative values
     - only two values in array
     - only one value in array



  ==================================================
  PHASE 2: STRATEGIZE
  ==================================================

  8. Brute Force Approach:
     1. Create a variable that returns true of false based on whether
     theirs duplicates or not
     2. Create a nested loop and iterate until we find duplicates
     3. return variable


  9. Pattern I Suspect:
     - Hash map


  10. Optimal Approach — explain before coding:
      1. Create a map
      2. We iterate through array of numbers
      3. If we find a duplicate return true
      4. If not we store the key in our map
      5. If not values are found return false


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
      - remove conditionals that check length of array because loops already solve this
      - next time i should to use set as it is cleaner, less redundant and has cleaner apis



  ==================================================
  PHASE 4: VERIFY
  ==================================================

  14. Dry Run:
      Test case:
      Trace:


  15. Edge Case Check:
      -


  16. Final Complexity:
      Time: 0(n)
      Space:


  17. Solved In:
      20_ minutes


  18. What I Learned:
      -
*/

export function containsDuplicate(arrayOfNumbers: number[]): boolean {
  /**
     *   Optimal Approach — explain before coding:
      1. Create a map
      2. We iterate through array of numbers
      3. If we find a duplicate return true
      4. If not we store the key in our map
      5. If not values are found return false

     */
  if (!arrayOfNumbers.length || arrayOfNumbers.length === 1) return false;

  const map: Record<number, boolean> = {};

  for (let num of arrayOfNumbers) {
    // does number exist in array already
    if (map[num] !== undefined) {
      return true;
    }

    map[num] = true;
  }
  return false;
}
