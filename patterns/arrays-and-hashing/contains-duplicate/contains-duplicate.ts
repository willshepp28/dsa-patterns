/*

DATE: 4/5/26

  ==================================================
  PHASE 1: UNDERSTAND
  ==================================================

  1. Problem — restate in my own words:
    Given an array of numbers we need to check if theres any duplicate numbers in the array and if so return true or false

  2. Input / Output:
     Input: number[]
     Output: boolean


  3. Examples:
     Example 1: Given [1,2,3,3] return true
     Example 2: Given [1,2,3] return false


  4. Clarifying Questions:
     - Can the input be empty? return false 
     - What should I return if there is no valid answer? false


  5. Constraints:
     - n size:
     - value range:
     - sorted or unsorted:
     - must solve in-place?:


  6. Edge Cases:
     - no values passed return false
     - only two values in array check those without createing addiontal data structures
     -


  7. Test Cases I’ll Run:
     - no values passed return false
     - if only two numbers passed
     -



  ==================================================
  PHASE 2: STRATEGIZE
  ==================================================

  8. Brute Force Approach:
     1.Create a nested loop
     2.Check if any values match
     3. return boolean


  9. Pattern I Suspect:
     - hash map


  10. Optimal Approach — explain before coding:
      1. create map
      2. iterate through the nums array
      3. if number in nums array exists in map return true
      4. if number in nums array doesnt exist add to map
      5. if iterateion complete and no numbers are duplicates return flase


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
      - type signuature was wrong i used [number] instead of number[] for which meant i was assigning a type of tuple to arrayOfNumbers instead of an array of numbers
      - the return type of containsDuplicate was orignally unknown and should have been a boolean
      - The special case of checking if theres only to values in arrayOfNumbers when hash map already handles that
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
      Time: 0(n)
      Space: 0(n)


  17. Solved In:
      15 minutes


  18. What I Learned:
      -
*/

export function containsDuplicate(arrayOfNumbers: number[]): boolean {
  /*
      10. Optimal Approach — explain before coding:
      1. create map
      2. iterate through the nums array
      3. if number in nums array exists in map return true
      4. if number in nums array doesnt exist add to map
      5. if iterateion complete and no numbers are duplicates return flase
    */

  if (!arrayOfNumbers.length) return false;

  if (arrayOfNumbers.length === 2) {
    return arrayOfNumbers[0] === arrayOfNumbers[1] ? true : false;
  }

  const map: any = {};

  for (let number of arrayOfNumbers) {
    if (map[number]) {
      return true;
    }

    map[number] = (map[number] || 0) + 1;
  }

  return false;
}
