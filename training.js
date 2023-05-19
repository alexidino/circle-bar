const inputArray = [1,5,4,2,2,3,2,6,1];
const elementToRemove = 2;



const myArray = ['apple', 'banana', 'cherry', 'date', 'apple', 'banana'];
const searchValue = 'apple';



// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {

//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j]
//         console.log('temp: ', temp);
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         console.log('arr: ', arr);
//       }
//     }
//   }
//   return arr
// }


// Example usage:
var array = [5, 3, 8, 4, 2];
let fruitArray = ['banana', 'strawberry', 'apple', 'orange', 'mango'];
// console.log(bubbleSort(array)); // Output: [2, 3, 4, 5, 8]


// function merge(left, right) {

//   let arr = [];
//   console.log('arr: ', arr);

//   while (left.length && right.length) {
//     console.log('go go go', left, right);
//     if (left[0] < right[0]) {
//       arr.push(left.shift())
//     } else {
//       arr.push(right.shift())
//     }
//   }

//   return [...arr, ...left, ...right];
// };


// function mergeSort(array) {
//   const half = Math.floor(array.length / 2);
//   // console.log('half: ', half);

//   if(array.length < 2) {
//     return array
//   }

//   const left = array.splice(0, half)
//   console.log('left: ', left);
//   return merge(mergeSort(left), mergeSort(array));
// };

// console.log(mergeSort(array));


Array.prototype.myMap = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i ++) {
    result.push(callback(this[i], i));
  }

  return result;
}

const result = fruitArray.myMap(item => item.toUpperCase());
console.log('result: ', result);


const newArray = array.slice(0,2);
console.log(array, newArray);


// const wordArr = array.splice(-1, 3, 'banana');
// console.log('array: ', array);
// console.log('wordArr: ', array.indexOf('banana'))


// function factorial(num) {
//   if (num <= 1) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// };

// console.log(factorial(7));

function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5))






