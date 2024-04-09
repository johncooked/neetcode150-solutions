/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    const numsSet = new Set(nums);

    return numsSet.size != nums.length;
};

// Test case 1
console.log(containsDuplicate([1, 2, 3, 1]));

// Test case 2
console.log(containsDuplicate([1, 2, 3, 4]));

// Test case 3
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
