// const cars = ["BMW", "HONDA", "CYCLE", "TUBE", "SCOOTY"];

// let value = "";
// for (let i = 0; i < cars.length; i++) {
//   value += cars[i] + "<br>";
// }
// // console.log(value);
// document.getElementById("demo").innerHTML = value;

// let number = ['1', '2', '3', '4', '5'];

// for (let i = 0; i <= 4; i++) {
//   number[i];
  
// }

// document.getElementById("demo").innerHTML = number;

// for (let i = 1; i <= 10 ; i++) {
//   console.log("Dhanesh Yadav");
// }

// let sum = 0;
// for (let i = 1; i <= 8; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// let i = 1;
// while (i <= 5) {
//   console.log("i = ", i);
//   i++;
// }

// let x = ["okay", "dk", "sk"];
// for (let i of x) {
//   console.log("value of i", i);
// }

// let x = "DHANESH";
// let size = 0;

// for (let i of x) {
//   console.log(i);
//   size++;
// }

// console.log(size);

// let student = {
//   isName: "Dhanesh yadav",
//   age: 23,
//   cgpa: 9.5,
//   isPass: true,
// };

// for (let key in student) {
//   console.log("key =", key, "value =", student[key]);
// }




// practice set

// Q1. Print all even number from 0 to 100.
// method 1
// for (let i = 0; i <= 100; i += 2) {
//   console.log(i);
// }

// // method 2

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// Q2 create a game

// let gameNum ="25";

// let userNum = prompt("Guess the game number : ");

// while (userNum !== gameNum) {
//   userNum = prompt("You enterd wrong number. Guess again : ");
// }

// console.log("Congratulation, you entered the right number");

// let Marks = [25, 35, 45, 55, 65, 75, 85, 95, 100];
// for (let i = 0; i < Marks.length; i++) {
//   console.log(Marks[i]);
// }

// for (i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (i = 1; i <= 10; i++) {
//   console.log(i * i); // square of 1 to 10
// }

// let students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

// let AvgMarks = 0;
// // let avg = (AvgMarks/students.length);

// for (let i = 0; i < students.length; i++) {
//   AvgMarks += students[i][1];
//   // var avg = (AvgMarks/students.length);
// }

// let avg = (AvgMarks/students.length);
// console.log("Average Grade: " + avg);

// if (avg < 60) {
//   console.log("Grade: F");
// } else if (avg < 70) {
//   console.log("Grade: D");
// } else if (avg < 80) {
//   console.log("Grade: C");
// } else if (avg < 90) {
//   console.log("Grade: B");
// } else if (avg < 100) {
//   console.log("Grade: A");
// }

// let a = -5;
// let b = -2;
// let c = -6;
// let d = 0;
// let f = -1;

// if (a > b && a > c && a > d && a > f) {
//   alert(a);
// } else if (b > a && b > c && b > d && b > f) {
//   alert(b);
// } else if (c > a && c > b && c > d && c > f) {
//   alert(c);
// } else if (d > a && d > b && d > c && d > f) {
//   alert(d);
// } else {
//   alert(f);
// }

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " is Even");
//   } else {
//     console.log(i + " is odd");
//   }
  
// }

// let x = 0;
// let y = -1;
// let z = 4;
// if (x > y && x > z) {
//   if (y > z) {
//     console.log(x + "," + y + "," + z);
//   } else {
//     console.log();
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i + " FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log(i + " Fizz");
//   } else if (i % 5 === 0) {
//     console.log(i + " Buzz");
//   } else {
//     console.log(i);
//   }
//   }

// defining empty array
// let empty = [];
// console.log(empty);
// console.log(empty.length);

// // defining array with integers
// let int = [20, 25, 56, 34, 43, 34, 89, 35, 25, 56];
// console.log(int);
// console.log(int.length);

// // defining array with strings
// let str = ["Dhanesh", "Yadav", "is", "Name", "of", "person", "hello"];
// console.log(str);
// console.log(str.length);

// // defining array with mixed data
// let mixed = [1, 24, 4.5, "Dhanesh", "Yadav", true, 100];
// console.log(mixed);
// console.log(mixed.length);

// array with 0 length
// let empty = new Array();
// console.log(empty, empty.length);

// // array with integer
// let int = new Array(1, 2, 3, 4, 5);
// console.log(int, int.length);

// // mixed array
// let mixed = new Array(1, 2.4, "DK", true, [1,2,3,4,5]);
// console.log(mixed, mixed.length);

// // array with length
// let arr = new Array(5, 2, 3);
// console.log(arr.length, arr[0]);

// let ele = [1, 10, "hello", true, 2.5];
// console.log(ele);

// // adding element at the end of the array
// ele.push(25);
// console.log(ele);

// ele.push(200);
// console.log(ele);

// ele.push("DHANESH");
// console.log(ele, ele.length);
// console.log(typeof ele);

// // adding element at the begining of the array
// ele.unshift(300);
// console.log(ele);

// ele.unshift("YADAV");
// console.log(ele);

// ele.splice(1, 0, 6);
// console.log(ele);

// ele.splice(7, 500);
// console.log(ele);

// let arr = ["DK", "RAM", 5, 2.5, true, 300];
// console.log(arr);
// arr[5] = "Shyam";
// console.log(arr);

// removing element at index number 2
// let removeElement = arr.splice(2, 1);
// console.log(arr);
// console.log(removeElement);

// removing last element from the array
// let removeElement = arr.pop();
// console.log(arr);
// console.log(removeElement);

// let arr = [1, 2, 3, 4, 5];
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// arr.forEach(function(element, index) {
// console.log(element + " is at index " + index);
// });

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// let arr1 = [1, 2, [3, 4], 5];
// console.log(arr1);

// let arr2 = [1, 2, [2, 3, [4, 5, [6, 7]]]];
// console.log(arr2);

// let marks = [85, 97, 44, 37, 76, 60];
// console.log("The lenght of Marks is: " + marks.length);
// let sum = 0;

// for (let i = 0; i < marks.length; i++) {
//   sum += marks[i];
// }

// console.log("The value of sum is: " + sum);

// let AvgMarks = (sum/marks.length);
// console.log("The Average Marks is: " + AvgMarks);


// let sum = 0;

// marks.forEach(function(element, index) {
//   console.log(element);
// })

// let sum = 0;
// for ( let val of marks) {
//   sum += val;
//   console.log(val);
// }
// let avg = sum / marks.length;
// console.log(`The avg marks of stu = ${avg}`);


let price = [250, 645, 300, 900, 50];
// // console.log(price);

// // let discount = 0;
// for (let i = 0; i < price.length; i++) {
//   discount = price[i]/10;
//   console.log(discount);
// }
// let finalPrice = price - discount;
// console.log(finalPrice);

// let i = 0;
// for (let val of price) {
//   let offer = val / 10
//   price[i] -= offer;
//   console.log(`value of after offer = ${price[i]}`);
//   i++;
// }

// for (let i = 0; i < price.length; i++) {
//   let offer = price[i] / 10;
//   price[i] -= offer;
// }
// console.log(price);

// practice set

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(companies);
// companies.unshift("Bloomberg");
// console.log(companies);

// companies.splice(0,1);
// console.log(companies);

// companies[1] = "Ola";
// console.log(companies);

// companies.push("Amazon");
// console.log(companies);

// function addition(x, y, z) {
//   let sum = x * y * z;
//   return sum;
// }

// console.log(addition(3, 4, 5));
// console.log(addition(5, 12, 34));
// console.log(addition(1, 2, 3));

// function hello() {
//   console.log("hello World!");
// }

// hello();

// function hello(name) {
//   console.log(`Hello ${name}!`);
// }

// hello("Dhanesh");

// function message() {
//   alert("call me!");
//   return message;
// }


// function fullName(firstname, lastname) {
//   console.log(firstname + " " + lastname);
// }

// fullName("dk", "yadav");
// fullName("dk");
// fullName("dk", "kumar", "yadav");

// function pass(mark) {
//   if (!mark) {
//     console.log("invalid marks");
//     return;
//   }
//   if (mark > 40) {
//     console.log("pass!");
//     return true;
//   } else {
//     console.log("Fail!");
//     return false;
//   }
// }

// pass(60);

// function countVowels(str) {
// let count = 0;
// for (const char of str) {
//   if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     count++;
//   }
// }

// console.log(count);

// }

// let nums = [1, 2, 3, 4, 5, 6, 7];

// nums.forEach((nums) => {
//   console.log(nums * nums);
// })


// for (let props in document) {
//   console.log(props + ' => ' + document[props]);
// }

// let newdocument = new Document();

// for (let props in newdocument) {
//   console.log(props + ' => ' + newdocument[props]);
// }

// let doctypeObj = document.doctype;
// console.log(doctypeObj);

// let uri = document.documentURI;

// console.log(uri);

// let head = document.head;

// console.log(head.nodeName);

// let docTitle = document.title;

// console.log(docTitle);
// document.title = "New title";
// console.log(document.title);

// let docLinks = document.links;
// for (let i = 0; i < docLinks.length; i++) {
//   console.log(docLinks[i].href);
// }

// let a = document.querySelector("h1");

// a.innerHTML = "Welcome to my first change through js";

// a.style.color = "blue";
// a.style.backgroundColor = "yellow";

// // a.addEventListener("click", function() {
// //   console.log("this is my first event listner");
// // })

// a.addEventListener("click", function() {
//   a.innerHTML = "change content";
//   a.style.color = "red";
//   a.style.backgroundColor = "pink";
// })

let bulb = document.querySelector("#circle");
let bulbOn = document.querySelector(".on");
let bulbOff = document.querySelector(".off");

bulbOn.addEventListener("click", function() {
  bulb.style.backgroundColor = "yellow";
})

bulbOff.addEventListener("click", function() {
  bulb.style.backgroundColor = "white";
})