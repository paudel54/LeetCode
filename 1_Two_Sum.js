// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Time Complexity - O(n*n)
// Space Complexity - O(1) 

console.log('its sum of two numbers!!')
console.log('Approach 1 Brute force')


let twoSum = function (arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                // console.log(arr.indexOf(arr[i]), arr.indexOf(arr[j]))
                return [i, j];
            }
        }
    }

}

// let value = twoSum([3, 2, 4], 6);
// console.log('Its a value from two sum', value);

// twoSum([2, 7, 11, 15], 9);
// twoSum([3, 2, 4], 6);

// 3 4 2

var twoSum1 = function (nums, target) {
    const hashmap = {}
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const numToFind = target - currentNum;

        for (let i = 0; i < nums.length; i++) {
            const currentNum = nums[i];
            const numToFind = target - currentNum;

            if (hashmap[numToFind] >= 0) {
                return [hashmap[numToFind], i]
            } else {
                hashmap[currentNum] = i;
            }
        }


    }
};

let result = twoSum1([2, 8, 4], 6);
console.log(result);