// Empty Array;
const myArray = [];

// Arrays are mutable
myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false;
console.log(myArray);

// length of an array.
console.log(myArray.length);

// last element of an array.
console.log(myArray[myArray.length - 1]);

// specific index of an array.
console.log(myArray[1]);

// push method => add one or more elements to the end of the array.
myArray.push("school");
console.log(myArray);

// pop method => remove and return the last element of an array.
let lastItem = myArray.pop();
console.log(myArray);
console.log(lastItem);

// unshift method => add one or more elements to the beginning of an array.
myArray.unshift(42);
console.log(myArray);

// shift method => remove and return the first element of an array.
let firstItem = myArray.shift();
console.log(myArray);
console.log(firstItem);

// delete property => removes element from the specified index but does not change the array length. (not recommended to removes array elements)
/* delete myArray[1];
console.log(myArray);
console.log(myArray[1]); */

// splice method => used to add, remove or replace elements in an array. SYNTAX (index to start with, number of elements, optional elements)
// removing elements
const fruits = ["apple", "banana", "orange", "grape"];
fruits.splice(1, 2); // Removes "banana" and "orange"
console.log(fruits);

// adding elements
const numbers = [1, 2, 3];
numbers.splice(2, 0, 4, 5); // Inserts 4 and 5 at index 2
console.log(numbers);

// replacing elements
const veges = ["potato", "tomato", "spinach"];
fruits.splice(1, 1, "brocoli"); // Replaces "tomato" with "brocoli"
console.log(fruits);

// reverse method => reverse the array.
myArray.reverse();
console.log(myArray);

// join method => join elements of an array into a string.
let newArray = ["A", "B", "C", "D", "E", "F"];
let newString = newArray.join();
console.log(newString);

// splitting string and converting to an array.
let anotherArray = newString.split(",");
console.log(anotherArray);

// concat method => used to add two or more arrays in one array.
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];
const arrC = arrA.concat(arrB);
console.log(arrC);

// spread operator => [...] used to expand iterables into individual elements.
const arrD = [...arrA, ...arrB];
console.log(arrD);

// accessing elements in-depth
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [arr1, arr2];
console.log(arr3);
console.log(arr3[0][2]); // 3
