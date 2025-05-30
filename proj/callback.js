// function greet(name) {
//   return `Hello, ${name}!`;
// }

// function processUser(callback, userName) {
//   return callback(userName); // Calls the function passed as "callback"
// }

// console.log(processUser(greet, ("Anas"))); // Output: "Hello, Anas!"












//
// function processData(callback) {
//   const message = "JavaScript is awesome!";
//   callback(message); // Calls the callback function with the message
// }

// function displayMessage(text) {
//   console.log(text); // Logs the received text
// }

// processData(displayMessage); // Output: "JavaScript is awesome!"





// function executeCallback(callback) {
//   callback("Hello from the callback function!");
// }

// function showMessage(message) {
//   console.log(message);
// }

// executeCallback(showMessage); // Output: "Hello from the callback function!"


// function executeCallback(callback) {
//   callback("Hello from the callback function!");
// }

// function showMessage(message) {
//   console.log(message);
// }

// executeCallback(showMessage);











//
// function greet(name){
// return `Hello, ${name}`
// }

// function processUser (callback, userName){
//   return callback(userName);
// }

// console.log(processUser(greet, "Anas"));



// function sayHello(name) {
//   console.log(`Hello, ${name}!`);
// }

// function executeTwice(twice, userName){
// twice(userName)
// twice(userName);
// }

// executeTwice(sayHello, "Anas");  
// // Expected Output:
// // Hello, Anas!
// // Hello, Anas!



// function double(num) {
//   return num * 2;
// }
// let store = [];

// function applyCallback(array, timesTwo){
// for (let i = 0; i<array.length; i++ ){
//   let store = i, timesTwo;

// }

// return store;
// }

// console.log(applyCallback([1, 2, 3], double));  
// // Expected Output: [2, 4, 6]



// function double(num) {
//   return num * 2;
// }

// function applyCallback(array, timesTwo) {
//   let store = []; // Initialize an empty array to store results

//   for (let i = 0; i < array.length; i++) {
//     store.push(timesTwo(array[i])); // Apply callback and add to store
//   }

//   return store; // Return the transformed array
// }

// console.log(applyCallback([1, 2, 3], double));  
// Expected Output: [2, 4, 6]


// function greet(name){
// return `Hello, ${name}`
// }

// function processUser(callback, userName){
// return callback(userName)
// }


// console.log(processUser(greet, "Anas"));

// const add = (x , y) => x + y;

// add.alias = "Hidden_secret";

// console.log(add(2,3));
// console.log(add.alias);


// const randomNums = [1, 123, 25, 90, 3543, 42];

// const foundElement = randomNums.findIndex(num => num > 200);

// console.log(foundElement);


// let multiplyTwoValues = (val1, val2) => { 
//   return val1 * val2; 
// }

// let square = (val) => { 
//   return val * val; 
// }

// let getFunctionString = (func) => { 
//   return func.toString(); 
// }

// let result = multiplyTwoValues(2, 2);
// square(result);





// function triple(num) {
//   return num * 3;
// }

// function transformArray(array, callBack){
// let store = []

// for (let i = 0; i<array.length; i++){
//   store.push(callBack(array[i]));
// }
// return store;

// }

// console.log(transformArray([2, 4, 6], triple));  
// // Expected Output: [6, 12, 18]


function triple(num) {
  return num * 3;
}

function transformArray(array, callBack) {
  return array.map(callBack);
}

console.log(transformArray([2, 4, 6], triple));  
// Expected Output: [6, 12, 18]