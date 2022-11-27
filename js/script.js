// Суворий режим
"use strict";

console.log("Hello world!");
console.log("Учим JS");
console.log("JS");
console.log("Учим");
/*
let user;
let userName;
userName = "Вася";
user = userName;
console.log(user);
*/

//Вариант №1
let user = "Вася";
let age = 36;

//Вариант №2
let myAge = 36;

//Вариант №3
const BLOCK_SIZE = 14 + 50;
console.log(BLOCK_SIZE);

//Вариант №4
const BLOCK_HEIGHT = 100;
console.log(BLOCK_HEIGHT);

//Вариант №5
if (true) {
  var size = 15;
}
console.log(size);

//Вариант №1
let userAge = 36;
let userInfo = `Фрилансер ${userAge}`;
console.log(userInfo);

//Вариант №2
let userHeight = 145 / 0;
//Вернется значение NaN
console.log(userHeight);

//Вариант №3
let userName;
//Вернется тип данных Null
console.log(typeof userName);

//Вариант №4
let userSize = "45" / "8";
console.log(userSize);

//Вернется тип данных Number
console.log(typeof userSize);
