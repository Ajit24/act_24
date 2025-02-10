// This function demonstrates the difference between using var and let in a for loop with setTimeout.
// The first loop uses var, which has function scope, causing all timeouts to log the final value of i (3).
// The second loop uses let, which has block scope, causing each timeout to log the value of i at the time of its creation.

for(var i = 0; i < 3; i++){
    setTimeout(() => {
        console.log(i); // logs 3, 3, 3
    }, 1);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // logs 0, 1, 2
    }, 1);
}



// 1. What is the difference between null and undefined in JavaScript?
// Answer:
console.log(null === undefined); // false
console.log(null == undefined); // true

// 2. How do you implement a singleton pattern in JavaScript?
// Answer:
class Singleton {
    static instance;
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

// 3. Write a function to check if a string is a palindrome.
// Answer:
function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

// 4. How do you implement a memoization technique in JavaScript?
// Answer:
function memoize(func) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = func(...args);
        cache[key] = result;
        return result;
    }
}

// 5. Write a function to find the first duplicate in an array.
// Answer:
function findFirstDuplicate(arr) {
    const set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            return arr[i];
        }
        set.add(arr[i]);
    }
    return null;
}

// 6. How do you implement a debouncing technique in JavaScript?
// Answer:
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    }
}

// 7. Write a function to check if a number is a power of two.
// Answer:
function isPowerOfTwo(n) {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

// 8. How do you implement a throttling technique in JavaScript?
// Answer:
function throttle(func, delay) {
    let lastCallTime;
    return function(...args) {
        const currentTime = Date.now();
        if (!lastCallTime || currentTime - lastCallTime >= delay) {
            func(...args);
            lastCallTime = currentTime;
        }
    }
}

// 9. Write a function to find the maximum subarray sum.
// Answer:
function maxSubarraySum(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

// 10. How do you implement a binary search algorithm in JavaScript?
// Answer:
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}


function reverseArray(arr) {
    return arr.slice().reverse();
}

// or using array methods
function reverseArray(arr) {
    return [...arr].reverse();
}

// or using a for loop
function reverseArray(arr) {
    return arr.reduce((acc, current) => [current, ...acc], []);
}
function reverseArray(arr) {
    return arr.slice().reverse();
}

// or using array methods
function reverseArray(arr) {
    return [...arr].reverse();
}

// or using a for loop
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// or using array reduce
function reverseArray(arr) {
    return arr.reduce((acc, current) => [current, ...acc], []);
}


// or using array reduce
function reverseArray(arr) {
    return arr.reduce((acc, current) => [current, ...acc], []);
}


// Minimize the Heights II

function getMinDiff(arr, n, k) {
    if (n === 1) return 0;
    if (k === 0) return arr[n - 1] - arr[0];
    arr.sort((a, b) => a - b);
    let ans = arr[n - 1] - arr[0];
    let small = arr[0] + k;
    let big = arr[n - 1] - k;
    if (small > big) {
        let temp = small;
        small = big;
        big = temp;
    }
    for (let i = 1; i < n; i++) {
        let subtract = arr[i] - k;
        let add = arr[i] + k;
        if (subtract >= small) {
            small = subtract;
        }
        if (add <= big) {
            big = add;
        }
        if (small === arr[i]) break;
    }
    return Math.min(ans, big - small);
}


