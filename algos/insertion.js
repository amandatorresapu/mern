/* 
  - Visualization with playing cards (scroll down):
      https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
  - Array / bar visualization:
      https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
  - Stable sort, efficient for small data sets or mostly sorted data sets.
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
  Space: O(1) constant.
  - this sort splits the array into two portions (conceptually, not literally).
  - the left portion will become sorted, the right portion
      (that hasn't been iterated over yet) is unsorted.
  // can shift OR swap target element until it reaches desired position
  // shifting steps:
  1. consider the first item as sorted
  2. move to the next item
  3. store current item in a temp var (to make this position available to shift items)
  4. if item to the left of current is greater than current item, shift the
      left item to the right.
  5. repeat step 4 as many times as needed
  6. insert current item
  7. move to the next item and repeat
  // swap steps:
  1. consider the first item as sorted
  2. move to the next item
  4. if item to left of current item is less than current, swap
  5. repeat step 4 until item to left is less than current item
  6. move to next item and repeat
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given array in-place.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 * 
 * Lopp goes left to right, then right to left. is a for loop, right. is a while loop
 * interview quesitons: when we exit our loop, we need to save our spot where we started- why use j?
 * If we did not save our spot, it would have to go through the loop again- revisiting the elements
 */
function insertionSort(nums) {
// start at position 1
    for(let i = 1; i<nums.length; i++){
        // console.log(nums[i])
        let currentIndex = i;
        // as long the value to the left of the current value is greater than it (right) swap and move to the left. 
       while(nums[currentIndex-1] > nums[currentIndex]){
           //this swaps the value of the current i with the i to the left, then the swap happens
        [nums[currentIndex], nums[currentIndex-1]] = [nums[currentIndex -1], nums[currentIndex]];
        //we need to decrement so that the value swamp is still less than the current index, make sure the value on the left is less than the right still
        currentIndex--
       }

    }
    return nums;
}

console.log(insertionSort(numsRandomOrder));
console.log(insertionSort(numsReversed));

/*****************************************************************************/