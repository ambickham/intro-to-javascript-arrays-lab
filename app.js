// console.log('sanity check')
// // /*
// // Exercise 1: Define an empty array

// // 1) Create an empty array and assign it to a variable called `foods`.

// // Exercise 1 has been completed for you:
// // */

// // const foods = [];  

// // console.log('Exercise 1 result:', foods);

// // /*
// // Exercise 2: Add strings to the array

// // 1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

// // Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

// // Complete Exercise 2 in the space below:
// // */

// const foods = [];  
// foods.push('pizza');
// foods.push('cheeseburger');
// console.log('Exercise 2 result:', foods);

// /*
// Exercise 3: Insert at the beginning

// 1) Insert the string 'taco' at the beginning of the `foods` array.

// Complete Exercise 3 in the space below:
// */

// NOTE: To add an item to the beginning, it's .unshift()

// const foods = [];  
// foods.push('pizza');
// foods.push('cheeseburger');
// foods.unshift('taco');
// console.log('Exercise 2 result:', foods);
// console.log('Exercise 3 result:', foods);

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

// Complete Exercise 4 in the space below:
// */

// const foods = [ "taco", "pizza", "cheeseburger"] // Defining a variable 
// const favFood= foods [1] // Accessing an element from that array foods [1] and assigning another variable to favFood 
// console.log('Exercise 4 result:', favFood); // calling the result 

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/


const foods = [ "taco", "pizza","cheeseburger"];
foods.splice(2,0,"tofu");
console.log('Exercise 5 result:', foods);
