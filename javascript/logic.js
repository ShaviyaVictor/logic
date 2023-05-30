
// Challenge 1: https://javascript.plainenglish.io/15-javascript-shorthand-ultimate-cheatsheet-d1f71a363a90

// #####  5:  30052023    #####

// =======> String to Array
// We can use the split() method to convert a String to an Array
  // The split() method splits a String into substrings using a seperator string or a regular expression

//  -> Longhand 
let string = "Norris Ambune, Josphine Mbaisi, Victor Shaviya";
let array3 = string.split(",",);
console.log(array3)


//  -> Shorthand 
let string1 = "Jane Migaliza, Hycine Mapendo, Fidel Nafula";
let array4 = [...string1.split(",")]
console.log(array4)
  
// #####    30052023    #####



// #####  4:  29052023    #####

  // =======> JavaScript Loops
  // JavaScript provides several types of loops for repeating code blocks repeatedly:
    // for loop; for-in loop; for-of loop 

  // 1) for loop
    // It has 3 parts: the initial variable for the for-loop; the loop condition; the increament or decreament expression
    // The loop will keep running as long as the condition is true 
  for (let i=4; i<=5; i++) {
    console.log(i);
  }

  // 2) for-in loop
    // This loop allows us to iterate over an object's properties
  // let object = {'a':'1', 'b':'2'} //or
  let object = {a:1, b:2, c:3};
  for (let property in object) {
    console.log(property + ":" + object[property]);
  }

  // 3) for-of loop
    // This loop iterates over values IF the iterable object is an Array or String
  let array = ['Norris', 'Jos', 'Vic'];
  for (let element of array) {
    console.log(element)
  }

// #####    29052023    #####



// #####  3:  28052023    #####

  // =======> Parameters a function accepts
  // You can find the number of parameters a function accepts using the below 2 methods
  //  -> Method 1 
  //  -- Based on the number of arguments in the function definition;
      // the length property of a function returns the number of arguments that the function expects to receive.

  function myFunction(a, b, c, d) {
    // function body
  }

  console.log(myFunction.length);

  //  -> Method 2
  //  -- The parameters passed to a function are stored in an object called an argument, which looks like an array;
      // using the length property of the argument object, you can find how many objects were passed to the function
      // however, you cannot use the arguments object to figure out how many arguments a function expects from outside the function
      // coz it is only accessible inside the function.
  // Method 1 thus becomes the better choice

  function myFunction2(a, b, c) {
    console.log(arguments.length)
  }
  myFunction2(1, 2, 3);

// #####    28052023    #####



// #####  2:  27052023    #####

  // =======> Combining of Arrays
  //  -> Longhand 
  //  -- Using a for Loop and push() method
  // initialize the values of arrays to be concatinated and their final value initialized to an empty array 
  // using push() method in for loop to add the the arrays to our final array combination
  // printing the output

  var array1 = [10, 20, 30];
  var array2 = [40, 50, 60];
  var combinedArray1 = [];

  for (let i=0; i<array1.length; i++) {
    combinedArray1.push(array1[i])
  }
  for (let i=0; i<array2.length; i++) {
    combinedArray1.push(array2[i])
  }

  console.log(combinedArray1);


  //  -> Shorthand 
  // -- Using either concat(), ..., and reduce() methods
  // concat() and ... methods combine the elements of the arrays by appending the elements of the 2nd to the end of the 1st array unlike the reduce() method

    // concatenation using concat() method
  var array1 = [10, 20, 30];
  var array2 = [40, 50, 60];
  var combinedArray2 = array1.concat(array2);

  console.log(combinedArray2);

    // concatenation using ... method
  var array1 = [10, 20, 30];
  var array2 = [40, 50, 60];
  var combinedArray3 = [...array1, ...array2];

  console.log(combinedArray3)
    
    // concatenation using reduce() method
  var array1 = [10, 20, 30];
  var array2 = [40, 50, 60];
  // array2 will be added 1st then array2
  var combinedArray4 = array1.reduce((acc, val) => acc.concat(val), array2);
  // array1 will be added 1st then array2 
  var combinedArray5 = array2.reduce((acc, val) => acc.concat(val), array1);

  console.log(combinedArray4);
  console.log(combinedArray5);

// #####    27052023    #####



// #####  1:  26052023    #####

  // =======> Repeating a String 
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

// #####    26052023    #####
