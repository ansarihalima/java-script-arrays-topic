
// var weight = +prompt("Enter weight");
// var time = +prompt("Enter Time");

// if (!(weight > 300 && time < 6)) {         
//     alert("Come to tryout");
// } else {
//     alert("Come to our cookout")
// }


// let x = 10;
// let y = 5;

// if (x > 5) {
//     if (y > 2) {
//         console.log("Both x and y are greater than their respective thresholds.");
//     } else {
//         console.log("x is greater than 5, but y is not greater than 2.");
//     }
// } else {
//     console.log("x is not greater than 5, so the inner condition is not checked.");
// }



// let temperature = 15;
// let isSunny = true;

// if(temperature > 25){
//   console.log("It's hot outside!");

//   if(isSunny){
//       console.log("Don't forget to wear sunscreen.");
//   }
//   else{
//     console.log("You might still want to wear sunscreen.");
//   }
// }
// else if(temperature >= 15 && temperature <= 25){
//     console.log("It's a pleasant day.");
//   if(isSunny){
//     console.log("Enjoy the sunshine!");
//   }
//   else{
//     console.log("Even if it's cloudy, it's still nice outside.");
// }
// }

// else{
//     console.log("It's a bit chilly.");
//     if (isSunny) {
//         console.log("Don't be fooled by the sun, it's still cool.");
//     } else {
//         console.log("It might be cloudy, so bring a jacket just in case.");
//     }
// }


// ///////////////////////////////////////       Arrays  ///////////////////////////////
// /////////////////concat
// var myGirls = ["laiba" , "Sadia"]
// var myBoy = ["ali" , "sad" , "huzaifa"]
// var myChildren = myBoy.concat(myGirls)
// console.log(myBoy);
// console.log(myChildren);




// ///////unshift()
// /////////////array k start my add huga
// var fruit = ["banana","apple" , "mango", "peach"]
// fruit.unshift("Lemon" , "juice", 45)
// console.log(fruit);

///////////////shift
/////////////////start sy delete krwata h
// var fruit = ["banana","apple" , "mango", "peach"]
// console.log(fruit);
// console.log(fruit.shift());
// fruit.shift()
// console.log(fruit);


////////////////slice(Return a piece of array)
// let fruit = ["banana","apple" , "mango", "peach" , "lemon"]
// console.log(fruit);
// let piece_of_Array = fruit.slice(2)
// console.log(piece_of_Array);


//Splice
// var month = ["january", "feburary" , "March" , "april"]
// var day = month.splice(2,1)
// console.log(day);
// console.log(month);

// Qs. Create an array to store companies-> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”

// Remove the first company from the array

// Remove Uber & Add Ola in its place

// Add Amazon at the end

// var company = ["Bloomberg", "Microsoft","Uber", "Google", "IBM", "Netflix"];
// company.shift();
// console.log(company);


// var company = ["Bloomberg", "Microsoft","Uber", "Google", "IBM", "Netflix"];
// company.splice(2 ,1 ,"ola");
// console.log(company);


// var company = ["Bloomberg", "Microsoft","Uber", "Google", "IBM", "Netflix"];
// company.push("AMazon");
// console.log(company);



///////////////29-may-task

//////////////Question:1
///////Declare an empty array using JS literal notation to store student names in future.

let piece = [];

//////////////Question:2
/////////Declare and initialize a strings array.
let stringsArray = ['apple', 'banana', 'orange', 'grape'];
console.log(stringsArray);

//////////////Question:3
//// Declare and initialize a boolean array.
let booleanArray = [true, false, true, true];
console.log(booleanArray);

//////////////Question:4
/////////Declare and initialize a mixed array.

let mixedArray = ['corn', 22, true, null, {name: 'John'}, [1, 2, 3]];
console.log(mixedArray);

//////////////Question:5
// Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS,BS, BCOM, MS, M. Phil., PhD).
// Show the listed qualifications in your browser like:

// var qualifications =[ SSC, HSC, BCS,BS, BCOM, MS, M.Phil, PhD];

//////////////Question:5
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var studentName = ["Usaid" , "ubaid" ,"uzair"];
var studentScore =[320, 310, 210];
var total = 500
let percentage1 =(studentScore[0] / total) * 100;
let percentage2 =(studentScore[1] / total) * 100;
let percentage3 =(studentScore[2] / total) * 100;
document.write("score of" + " " + studentName[0] + " " + "is" + " " + studentScore[0] + "." + "Percentage:" +  percentage1 + "%" );
document.write("<br>" + "score of" + " " + studentName[1] + " " + "is" + " " + studentScore[1] + "." + "Percentage:" +  percentage2 + "%" );
document.write("<br>" + "score of" + " " + studentName[2] + " " + "is" + " " + studentScore[2] + "." + "Percentage:" +  percentage3 + "%" );