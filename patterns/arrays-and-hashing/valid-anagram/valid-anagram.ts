/*
  ==================================================
  UNDERSTAND
  ==================================================

  Restate the problem:
  - Given two strings return true if both are anagrams of each other

  Input / Output: "act", "cat" returns true
  Input: string, string
  Output: boolean

  Clarifying questions & edge cases:
  - Are strings always lowercase
  - What should i return if both are empty strings
  - Can i assume both inputs are always valid

  ==================================================
  STRATEGIZE
  ==================================================

  Approach:
  - Check if both strings are the same length if not return false
  - Create the hashmap
  - Iterate through first string and place each occurence in the map
  - Iterate through the second string
    - If character isnt in map return false
    - If character is in map and value greater than zero decrement value in map
    - If character is in map and value is zero return false
    - If we get through entire loop return true


  ==================================================
  BUILD
  ==================================================

  Narrate while coding:
  -

  ==================================================
  VERIFY
  ==================================================

  Dry run:
  Input: "jar", "rmj"
  Trace:
  map = {}

  Iterate through first string
  i=0, str1[i] = "j" not seen in map map={'j': 1}
  i=1, str1[i] = "j" not seen in map map={'a': 1}
  i=2, str1[i] = "j" not seen in map map={'r': 1}


  Iterate through s string
  i=0, str1[i] = "j" seen in map map={'r': 0}
  i=i, str1[i] = "m" not seen in map return false


  Final complexity:
  Time: O(n)  Space: O(1)

  ==================================================
  REFLECT
  ==================================================

  Time to solve: __ min
  What I'd say differently next time:
  - use nullish  nullish coalescing operator ?? to resolve missing keys in loop one

  for (let index = 0; index < str1.length; index++) {
  const char = map.get(str1[index]);
  map.set(str1[index], (char ?? 0) + 1);
}
*/
export function validAnagram(str1: string, str2: string): boolean {
  /*
       - Check if both strings are the same length if not return false
        - Create the hashmap
        - Iterate through first string and place each occurence in the map
        - Iterate through the second string
            - If character isnt in map return false
            - If character is in map and value greater than zero decrement value in map
            - If character is in map and value is zero return false
            - If we get through entire loop return true

     */
  if (str1.length !== str2.length) return false;

  const map = new Map<string, number>();

  for (let index = 0; index < str1.length; index++) {
    let char = map.get(str1[index]);
    let hasCharacter = map.has(str1[index]);

    if (hasCharacter && char !== undefined) {
      map.set(str1[index], char + 1);
    } else {
      map.set(str1[index], 1);
    }
  }

  /**
   *         - Iterate through the second string
            - If character isnt in map return false
            - If character is in map and value greater than zero decrement value in map
            - If character is in map and value is zero return false
            - If we get through entire loop return true
   */

  for (let index = 0; index < str2.length; index++) {
    let char = map.get(str2[index]);

    if (char === undefined || char === 0) {
      return false;
    }

    map.set(str2[index], char - 1);
  }

  return true;
}
