const arr = [1, 2, 3]
const str1 = "1, 2, 3"
console.log(arr === str1);  // false

// function abc(){
//     console.log(abc.xyz);
//   }
  
//   abc();
//   abc.xyz = 400;
//   abc();
// abc.xyz = 200;
// abc();



const obj= {
  sum: 200
}
console.log(obj.sum); // 200
delete obj.sum;
console.log(obj.sum); // undefined


// countries.map((item, index)=>{
// return(
//   <>
//   <option value={item.name}>{}</option>
//   </>
// )
// })


// ---- hoisting in js ------

//  Hoisting:    a built-in language behavior that moves variable, 
//  function, and class declarations to the top of their scope before code execution.
//   This allows you to use these declarations before they are declared in the code


function findDuplicate(arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return arr[i];
    }
    set.add(arr[i]);
  }
  return null;
}
 console.log(findDuplicate([1, 2, 3, 4,4, 5,]));

 function findDuplicateWord(str) {
  let words = str.split(' ');
  let set = new Set();
  for (let i = 0; i < words.length; i++) {
    if (set.has(words[i])) {
      return words[i];
    }
    set.add(words[i]);
  }
  return null;
}
console.log(findDuplicateWord("hello world hello"));



function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// alternative way
function reverseArrayAlt(arr) {
  return arr.slice().reverse();
}
console.log(reverseArrayAlt([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// using spread operator
function reverseArraySpread(arr) {
  return [...arr].reverse();
}
console.log(reverseArraySpread([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// using for loop
function reverseArrayLoop(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArrayLoop([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]




// Find an element in a rotated (pivoted) sorted array – an extension of binary search.
// the logic, edge cases, and optimizations for the solution.



function findInRotatedArray(arr, target) {
  if (!arr || arr.length === 0) {
    return -1;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    // If the left half is sorted
    if (arr[left] <= arr[mid]) {
      // If the target is in the left half
      if (arr[left] <= target && target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } 
    // If the right half is sorted
    else {
      // If the target is in the right half
      if (arr[mid] < target && target <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

// Example usage:
let arrr = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
console.log(findInRotatedArray(arrr, target)); // Output: 4



function reverseNumber(num) {
  let reversed = 0;
  while (num !== 0) {
    let remainder = num % 10;
    reversed = reversed * 10 + remainder;
    num = Math.floor(num / 10);
  }
  return reversed;
}
console.log(reverseNumber(12345)); // Output: 54321



for (let i = 1; i <= 5; i++) {
  let str = '';
  for (let j = 1; j <= i; j++) {
    str += '*';
  }
  console.log(str);
}
for (let i = 4; i >= 1; i--) {
  let str = '';
  for (let j = 1; j <= i; j++) {
    str += '*';
  }
  console.log(str);
}


// Given a string S and a list of words arr, count the number of times each word from the list arr appears in the string S. Return a list where each element represents the frequency of the corresponding word in arr.
// For Example :
// Input: 
//  S = "apple banana apple orange banana apple grape banana",
//  arr = ["apple", "banana", "orange", "grape"]
// Output : [3, 3, 1, 1]

function countWordFrequencies(S, arr) {
  let words = S.split(' ');
  let frequencies = new Array(arr.length).fill(0);
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (words[i] === arr[j]) {
        frequencies[j]++;
      }
    }
  }
  return frequencies;
}

let S = "apple banana apple orange banana apple grape banana";
let arr2 = ["apple", "banana", "orange", "grape"];
console.log(countWordFrequencies(S, arr2)); // Output: [3, 3, 1, 1]


// Difference between list and tuple

// List is a collection of items which can be of any data type including strings, integers, floats and other lists.
// Lists are denoted by square brackets [] and are mutable, meaning they can be changed after creation.

let listExample = [1, 2, 3, 4, 5];
console.log(listExample); // Output: [1, 2, 3, 4, 5]
listExample.push(6);
console.log(listExample); // Output: [1, 2, 3, 4, 5, 6]

// Tuple is a collection of items which can be of any data type including strings, integers, floats and other tuples.
// Tuples are denoted by parentheses () and are immutable, meaning they cannot be changed after creation.

let tupleExample = (1, 2, 3, 4, 5);
console.log(tupleExample); // Output: [1, 2, 3, 4, 5]

// However, if a tuple contains a mutable object, such as a list, we can modify the contents of that object.

let tupleWithList = (1, 2, [3, 4, 5]);
console.log(tupleWithList); // Output: [1, 2, [3, 4, 5]]
tupleWithList[2].push(6);
console.log(tupleWithList); // Output: [1, 2, [3, 4, 5, 6]]

// Another way to "add" elements to a tuple is by using the concat method, which returns a new tuple.

let tupleExample2 = (1, 2, 3, 4, 5);
console.log(tupleExample2); // Output: [1, 2, 3, 4, 5]
let newTuple = tupleExample2.concat([6, 7]);
console.log(newTuple); // Output: [1, 2, 3, 4, 5, 6, 7]

// Note that the original tuple remains unchanged.

console.log(tupleExample2); // Output: [1, 2, 3, 4, 5]


// Start here
let lol = {
  name: 'Andrew Tate',
  first() {
    console.log(this.name + ' Loves AngularJS');
  },
  second: function() {
    console.log(this.name + ' Loves himself. F Frameworks.');
  },
};

lol.first(); 
lol.second();  
 // Output: Andrew Tate Loves AngularJS
// Output: Andrew Tate Loves himself. F Frameworks.

// Explanation:
// The 'this' keyword in JavaScript refers to the current execution context of a function. 
// In the 'first' function, 'this' refers to the 'lol' object because it is a method of the 'lol' object.
// In the 'second' function, 'this' refers to the global object (usually the window object in a browser) because it is an arrow function. 
// However, in the modified code, the 'second' function is changed to a regular function, so 'this' refers to the 'lol' object

// Lazy-loading and Code Splitting

// Lazy-loading is a technique used to defer the loading of non-essential resources or components until they are actually needed.
// This can improve the performance of an application by reducing the amount of data that needs to be loaded initially.

// Code splitting is a technique used to split an application's code into smaller chunks, called bundles, that can be loaded on demand.
// This can improve the performance of an application by reducing the amount of code that needs to be loaded initially.

// Example of lazy-loading using JavaScript
function lazyLoadImage() {
  const img = document.createElement('img');
  img.src = 'image.jpg';
  document.body.appendChild(img);
}

// Example of code splitting using JavaScript
function loadComponent() {
  import('./component.js').then((module) => {
    const component = module.default;
    document.body.appendChild(component);
  });
}

// Example of lazy-loading using React
import React, { useState, useEffect } from 'react';

function LazyLoadedComponent() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = 'image.jpg';
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div>
      {imageLoaded ? (
        <img src="image.jpg" alt="Lazy Loaded Image" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

// Example of code splitting using React
import React, { useState, useEffect } from 'react';

function CodeSplitComponent() {
  const [componentLoaded, setComponentLoaded] = useState(false);

  useEffect(() => {
    import('./component.js').then((module) => {
      const component = module.default;
      setComponentLoaded(true);
    });
  }, []);

  return (
    <div>
      {componentLoaded ? (
        <Component />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
   console.log(i);
  }
}












