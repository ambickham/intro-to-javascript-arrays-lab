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


// const foods = [ "taco", "pizza","cheeseburger"];
// foods.splice(2,0,"tofu");
// console.log('Exercise 5 result:', foods);
// Notes: use .splace to insert or remove. if foods.splice is called, it's only going to tell me what item was deleted not what's added"

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
// */
// const foods = [ "taco", "pizza","cheeseburger"];
// foods.splice (1,1, "sushi", "cupcake");
// console.log('Exercise 6 result:', foods);
// I did not need to include "pizza" in the () since the other items were going to replace it. By keeping pizza, I actually ended up insertig it back in. 
/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

// const foods = [ "taco", "pizza", "sushi", "cupcake", "cheeseburger"];
// const yummy = foods.slice (2,4);
// console.log('Exercise 7 result:', yummy);
//Exercise 7 result: (2) ['sushi', 'cupcake']
// Notes: I interpretted this as first I need to add, but I should have assumed that sushi an cupcake were already there, since I'm asked to use the slice operation. 
// Continue to check spelling 
// Always check semicolon at the end to finish the command. 
// Remember that the index starts at 1, and by referencing the index as in this example, that's the object that I'm extracting. 

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

// const foods = [ "taco", "pizza", "sushi", "cupcake", "cheeseburger", "tofu"];
// const soyIdx = (foods.indexOf("tofu"));
// console.log(foods.indexOf('tofu'))
// Print => 5, successfully printed. 
// Remember you don't have to console.log again since the statement above is the console.log
// Read the prompt carefully, this is asking to reassign the variable. 
// To assign a new variable, set to const reference the first one. Example above.

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
// */
// const foods = ["taco", "sushi", "cupcake", "tofu", "cheeseburger"];
// const allFoods = foods.join(" -> ");
// console.log('Exercise 9 result:', allFoods);

//Exercise 9 result: taco -> sushi -> cupcake -> tofu -> cheeseburger
// Notes foods.join(), arrays are [] not (), check spelling always 

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

// const foods = ["taco", "sushi", "cupcake", "tofu", "cheeseburger"];
// const hasSoup = foods.includes("soup");
// console.log('Exercise 10 result:', hasSoup);
//Exercise 10 result: false, successfully printed! 
// Notes: Spelling all good! ; checked! 
// foods.includes has a () not a []

/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
// const odds = [];
// for (i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 !==0){
//     odds.push(nums[i]);   }
//     } 

// console.log('Exercise 11 result:', odds);
// for is a keyword i < nums.length means keep going as long as i is less then the total number of items.
// i++ means to add 1 each time loop runs to check the next numnber.
//nums[i] means get the item at the next index 
//% modulus operator which gives remainder
//Exercise 11 result: (8) [5, 23, 15, 21, 9, 45, 7, 81] 
// Successfully completed! 

// console.log('Exercise 11 result:', odds);
/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array.  -- **Selected For Of method** 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`. - succesful 
   - Push any number evenly divisible by 5 to an array called `buzz`. - successful 
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`. - successful 

     Exercise 12 Results:
    app.js:231   fizz: (5) [21, 72, 9, 66, 81]
    app.js:232   buzz: (2) [100, 5]
    app.js:233   fizzbuzz: (3) [15, 45, 90]

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
Exercise 12 Results:
    app.js:231   fizz: (5) [21, 72, 9, 66, 81]
    app.js:232   buzz: (2) [100, 5]
    app.js:233   fizzbuzz: (3) [15, 45, 90]
*/

// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// //Initialize the array first, don't forget the ; at the end of this statement 
// const fizzbuzz = []; // push numnbers / 3 and 5 
// const fizz = []; // push numbers /3
// const buzz = []; // push numbers /5


// for (const num of nums) {
//     if (num % 3 === 0 && num % 5 === 0){
//         fizzbuzz.push(num); // divisible by 3 & 5 
//     }
//     else if (num % 3 === 0){ // divisible by only 3
//         fizz.push(num);
//     } 
//     else if (num % 5 === 0) { // divisible by only 5
//         buzz.push(num);
//     } 
//     }

// console.log('Exercise 12 Results:');
// console.log('  fizz:', fizz);
// console.log('  buzz:', buzz);
// console.log('  fizzbuzz:', fizzbuzz);


/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
// */

// const numArrays = [
// 	[100, 5, 23],
// 	[15, 21, 72, 9],
// 	[45, 66],
// 	[7, 81, 90]
// ];
// const numList = numArrays[numArrays.length-1];
// console.log('Exercise 13 result:', numList);

// Exercise 13 result: (3) [7, 81, 90]
// Printed successfully! 

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/
// const numArrays = [
//     	[100, 5, 23],
//     	[15, 21, 72, 9],
//     	[45, 66],
//     	[7, 81, 90]
//     ];
// const num = numArrays [2][1]; // dont need a comma beetween numbers. 
// console.log('Exercise 14 result:', num);

// Exercise 14 result: 66

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

// const numArrays = [
//     [100, 5, 23],
//     [15, 21, 72, 9],
//     [45, 66],
//     [7, 81, 90]
//   ];
  
// let total = 0; 
// numArrays.forEach(innerArray => {
//     innerArray.forEach(number => {
//       total += number;  // Add the current number to the total
//     });
//   });

// console.log('Exercise 15 result:', total);

