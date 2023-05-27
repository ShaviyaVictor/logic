
// Challenge 1: https://javascript.plainenglish.io/15-javascript-shorthand-ultimate-cheatsheet-d1f71a363a90

// ################    26052023    ################

// =================> Repeating a String 
//  -> Longhand 
//  -- Using a for Loop to repeat a String multiple times 
  // initialize an empty String 
  // for loop that increases by index until it gets to the defined number
    // equitting the initialized empty string to take the defined String incrementally
// calling the function 

function repeatString(String, number) {
  let results = '';
  for (let i=0; i<number; i++) {
    results += String;
  }
  return results
}
console.log(repeatString('Shaviya', 5))

//  -> Shorthand 
// -- Using the repeat() method

let myName = 'Shaviya';
console.log(myName.repeat(5))

// or 

console.log('Shaviya'.repeat(5))

// ################    26052023    ################



// ################    27052023    ################

// =================>- Combining of Arrays
//  -> Longhand 
//  -- Using a for Loop and push() method
// initialize the values of arrays to be concatinated and their final value initialized to an empty array 
// using push() method in for loop to add the the arrays to our final array combination
// printing the output

let array1 = [10, 20, 30];
let array2 = [40, 50, 60];
let combinedArray = [];

for (let i=0; i<array1.length; i++) {
  combinedArray.push(array1[i])
}
for (let i=0; i<array2.length; i++) {
  combinedArray.push(array2[i])
}

console.log(combinedArray);

// ################    27052023    ################






