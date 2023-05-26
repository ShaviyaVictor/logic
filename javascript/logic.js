
// 26052023
// Repeating a String 
//  -> Longhand 
//  -- Using a Loop to repeat a String multiple times 
  // initialize an empty String 
  // for loop that increases by index until it gets to the defined number
    // equitting the initialized empty string to take the defined String incrementally
// calling the function 

function repeatString(String, number) {
  let results = '';
  for (i=0; i<number; i++) {
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



