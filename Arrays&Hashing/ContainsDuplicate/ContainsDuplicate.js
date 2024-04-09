/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    let res = false;

    nums.sort(); // This causes the algorithm to be slower. Typically O(n log n)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            res = true;
        }
    }

    return res;
};

// Test case 1
console.log(containsDuplicate([1, 2, 3, 1]));

// Test case 2
console.log(containsDuplicate([1, 2, 3, 4]));

// Test case 3
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
