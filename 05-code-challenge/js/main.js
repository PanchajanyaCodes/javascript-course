// ?? Write a program that will return a random letter from your name ??

let myName = "Utkarsh";
let nameLength = myName.length;
let randomLetter = Math.floor(Math.random() * nameLength);
console.log(myName.charAt(randomLetter));
