


// TODO 4 // Challenge 3: [05062023] https://medium.com/fullstack-programming-in-english/javascript-tips-and-tricks-using-powerful-functions-with-an-array-of-objects-d5daf27b1b4a  
// TODO 4 In Progress!!! -----> JavaScript Tips and Tricks: Using Powerful Functions With an Array of Objects

  // ! The challenges on the Part 4 will revolve around the various operations that you can do on a single Array of Objects

  // * Array test-case with the objects to work on 

  let studentsObjectsArray = [
    {
      "name": "Shaviya",
      "isOnline": false
    },
    {
      "name": "Jos",
      "isOnline": true
    },
    {
      "name": "Norris",
      "isOnline": false
    },
    {
      "name": "Norris",
      "isOnline": true
    }
  ];
  console.log(studentsObjectsArray);

// #####  Day37:  20072023    #####

  // ? =======> Converting Objects to Arrays Using Object.entries() method

  let objects2Array = studentsObjectsArray.map((eachObject) => Object.entries(eachObject));
  console.log(objects2Array);
  
// #####    20072023    #####

// #####  Day36:  19072023    #####

  // ? =======> Solving Scope Issues Using an IIFE - no prove for any of them, thus, to revisit
  // * The Scope Issues arise in times when we have to work with the var keyword 

  let newStudentNamesArray = studentsObjectsArray.map((eachStudent) => eachStudent.name);
  
  // for (var i=0; i<newStudentNamesArray.length; i++) {

  //   setTimeout(() => {
  //     console.log(newStudentNamesArray[i]);
  //   }, 1000);

  // };
  // Output: // undefined undefined undefined undefined
  // * If we print the students Objects after a second, we get undefined error 
  // * Since var is a global scope, the values of i increase first 
  // * The post-loop value of i is 4 & then when the setTimeout method is ChannelSplitterNode, object value for the respective i(studentsObjectsArray[i]) becomes undefined
  // * This is because the last object iterated in the loop is stored in the 3rd index hence the value in the 4th index is not there

  // for (var i=0; i<newStudentNamesArray.length; i++) {

  //   ((student) => {
  //     setTimeout(() => {
  //       console.log(student);
  //     }, 1000)
  //   })(newStudentNamesArray[i])

  // };
  // Output: // Shaviya Jos Norris Norris
  // * IIFE has been used to create a new function scope for setTimeout
  // * essentially wrapping the setTimeout() method in an IIFE 

  // for (let i=0; i<newStudentNamesArray.length; i++) {
  //   setTimeout(() => {
  //     console.log(newStudentNamesArray[i]);
  //   }, 1000)
  // };
  // Output: // Shaviya Jos Norris Norris
  // *Since the let keyword of ES6 has block scope;
    // * the i values are stored in each loop and we thus can see the consecutive values 

// #####    19072023    #####

// #####  Day35:  18072023    #####

  // ? =======> Sorting an Array of Strings

  // loop through the object getting the names 
  let studentNamesArray = studentsObjectsArray.map((eachStudent) => eachStudent.name);

  // sort the names and use localeCompare() function that checks if a given string comes before, after, or is equivalent to another string in sort order
  studentNamesArray.sort((first, second) => {
    return first.localeCompare(second);
  });
  console.log(studentNamesArray);

  // removing duplicate names from the array
  newStudentNamesArray = [...new Set(studentNamesArray)];
  console.log(newStudentNamesArray);

// #####    18072023    #####

// #####  Day34:  17072023    #####

  // ? =======> Using Array Sort Method to Sort the Objects in the Array

  studentsObjectsArray.sort((first, second) => {
    if (first.isOnline && !second.isOnline) {
      return -1
    }
    else if (!first.isOnline && second.isOnline) {
      return 1
    }
    else {
      return 0
    }
  });
  // not sure how the above logic ServiceWorkerRegistration, but it'll make sense soon enough
  console.log(studentsObjectsArray);

// #####    17072023    #####



// TODO 3 // Challenge 3: [06042023] https://levelup.gitconnected.com/some-javascript-tips-to-make-you-look-more-like-a-master-aaea9f92fc3c  
// TODO 3 Is Now DONE!!! -----> Some JavaScript Tips To Make You Look More Like a Master


// #####  Day33:  15072023    #####

  // ! Object Tips

  // ? =======> 1: Cloning an Object

  let nuclearFamObj = {
    "mother":"Jane",
    "bro":"Norris",
    "sis":"Josphine",
    "me":"Victor",
    "dad":"David"
  };

  // * Method1 - looping through
  let cloneNuclearFamObjMethod1 = { ...nuclearFamObj };
  console.log(cloneNuclearFamObjMethod1);

  // * Method2 - using JSON
  let stringSetObj = JSON.stringify(nuclearFamObj);
  let cloneNuclearFamObjMethod2 = JSON.parse(stringSetObj);
  console.log(cloneNuclearFamObjMethod2);
  // OR 
  let cloneNuclearFamObjMethod3 = JSON.parse(JSON.stringify(nuclearFamObj));
  console.log(cloneNuclearFamObjMethod3);

  // * Method3 - using Object.assign() method
  let cloneNuclearFamObjMethod4 = Object.assign({}, nuclearFamObj);
  console.log(cloneNuclearFamObjMethod4);
  
  // ? =======> 2: Merging Objects

  let gentsFamObj2Merge = {
    "bro":"Norris",
    "me":"Victor",
    "dad":"David"
  };
  let ladiesFamObj2Merge = {
    "mother":"Jane",
    "sis":"Josphine"
  };
  
  let mergedFamObj = { ...gentsFamObj2Merge, ...ladiesFamObj2Merge };
  console.log(mergedFamObj);

  // ? =======> 3: Object literal

  // let env = prod;
  // let dbUrl = {
  //   dev: "Development url",
  //   stg: "Staging url",
  //   prod: "Production url"
  // } [env];
  
  // env => "Production url"
  
  // ? =======> 4: Creating an Empty Object

  let newNullObj = Object.create(null);
  // Object.prototype.a = 0;

  console.log(newNullObj);

  
  // ? =======> 5: Removing Unwanted Properties from an Object

  let nuclearFamObj2Remove = {
    "mother":"Jane",
    "bro":"Norris",
    "sis":"Josphine",
    "me":"Victor",
    "dad":"David"
  };

  // * Method1 - using delete keyword - NOT the most Optimal
  delete nuclearFamObj2Remove.dad;
  console.log(nuclearFamObj2Remove);

  // * Method2 - removing and looping through the rest -- not sure why it's not working, to revisit
  // let { me, ...rest } =nuclearFamObj2RemovedMe;

  // * Method3 - Using the Object.fromEntries(), Object.Entries() and filter() functions
  // * the Object methods won't work if the key of the JSON object is not in double quotes as expected
  let nuclearFamObj2RemovedGents = Object.fromEntries(
    Object.entries(nuclearFamObj2Remove).filter(([key]) => key !== "bro" && key !== "me")
  );
  console.log(nuclearFamObj2RemovedGents);

// #####    15072023    #####

// #####  Day32:  14072023    #####

  // ! Array Tips

  // ? =======> 1: Cloning an Array

  const nuclearFam = ["Jane", "Norris", "Jos", "Shaviya"];
  const cloneNuclearFam = [...nuclearFam];

  console.log(cloneNuclearFam);

  // ? =======> 2: Merging Arrays

  let array2Merge1 = ["Jane", "Norris", "Jos", "Shaviya"];
  let array2Merge2 = ["Hycine", "Fidel", "Faith", "Rhodah"];

  let mergedArraysMethod1 = [...array2Merge1, ...array2Merge2];
  console.log(mergedArraysMethod1);

  let mergedArraysMethod2 = array2Merge1.concat(array2Merge2);
  console.log(mergedArraysMethod2);

  let mergedArraysMethod3 = array2Merge2.reduce((previous, next) => previous.concat(next), array2Merge1);
  console.log(mergedArraysMethod3);

  // ? =======> 3: Remove Duplicates from an Array || De-duplicate an Array

  // not so clean way but direct 
  let deduplicatedArray1 = [...new Set(["Vic", "Vic", 3, 5, 3, 8, 5, "Jos", 5, "Jos"])];
  console.log(deduplicatedArray1);

  // a cleaner way 
  let array2Deduplicate = ["Vic", "Vic", 3, 5, 3, 8, 5, "Jos", 5, "Jos"];

  let deduplicatedArray2 = [... new Set(array2Deduplicate)];
  console.log(deduplicatedArray2);

  // ? =======> 4: Inserting a member at the Beginning of an Array

  let originalArray = [2, "Jos", 2, "Vic"];

  // prints the length of the array on the console 
  let insert2originalArray1 = originalArray.unshift("Norris");
  console.log(insert2originalArray1);

  let insertMom = ["Mom", 2]
  let insert2originalArray2 = insertMom.concat(originalArray);
  console.log(insert2originalArray2);

  let insert2originalArray3 = [...insertMom, ...originalArray];
  console.log(insert2originalArray3);

  // ? =======> 5: Inserting a member at the End of an Array

  let originalArray2 = [2, "Jos", 2, "Vic"];

  // prints the length of the array on the console 
  let insert2originalArray4 = originalArray2.push("Norris");
  console.log(insert2originalArray4);

  let insertMom0 = [2, "Mom"]
  let insert2originalArray5 = originalArray2.concat(insertMom0);
  console.log(insert2originalArray5);

  let insert2originalArray6 = [...originalArray2, ...insertMom0];
  console.log(insert2originalArray6);

  let insert2originalArray7 = insertMom0.reduce((previous, next) => previous.concat(next), originalArray2);
  console.log(insert2originalArray7);

  // ? =======> 6: Creating an Array of specified Length

  // * Using the index as the key for the generated array 
  // * thus generating an Array starting from 0...
  let generateArray = [...new Array(6).keys()];
  console.log(generateArray);

  // ? =======> 7: reduce() method as an alternative for map() or filter() methods
  // * https://stackoverflow.com/a/155633/17420216

  let originalArray2reduce = [0, 1, 2, 4];
  
  // map() vs reduce()
  let map1_OriginalArray2reduce = originalArray2reduce.map((eachValue) => eachValue * 2);
  console.log(map1_OriginalArray2reduce);

  let reduce1_originalArray2reduce = originalArray2reduce.reduce((previous, next) => {
    previous.push(next * 2);
    return previous;
  }, []);
  console.log(reduce1_originalArray2reduce);

  // filter() vs reduce()
  let filter1_OriginalArray2reduce = originalArray2reduce.filter((eachValue) => eachValue > 0);
  console.log(filter1_OriginalArray2reduce);

  let reduce2_originalArray2reduce = originalArray2reduce.reduce((previous, next) => {
    next > 0 && previous.push(next);
    return previous;
  }, []);
  console.log(reduce2_originalArray2reduce);

  // map() && filter() combined vs reduce()
  let mapfilter_OriginalArray2reduce = originalArray2reduce.map((eachValue) => eachValue * 2)
                                                           .filter((eachValue) => eachValue > 2);
  console.log(mapfilter_OriginalArray2reduce);

  let reduce3_originalArray2reduce = originalArray2reduce.reduce((previous, next) => {
    next = next * 2;
    next > 2 && previous.push(next);
    return previous;
  }, []);
  console.log(reduce3_originalArray2reduce);

// #####    14072023    #####

// #####  Day31:  13072023    #####

  // ! Number Tips

  // ? =======> 1: Rounding

  // * Use Math.floor() - for positive numbers
  // * USe Math.ceil() - for negative numbers

  const floorTheNum1 = ~~2.895;
  const floorTheNum2 = 8.99 | 0;
  const floorTheNum3 = 5.29 >> 0;

  console.log(floorTheNum1);
  console.log(floorTheNum2);
  console.log(floorTheNum3);

  // ? =======> 2: Transfering Value

  // * Valid only for null, "", false, numeric strings 

  const num29 = +null;
  const num30 = +"";
  const num31 = +false;
  const num32 = +"132";

  console.log(num29);
  console.log(num30);
  console.log(num31);
  console.log(num32);

  // ? =======> 3: Complementary Zero

  const fillWithZeros = (num, len) => num.toString().padStart(len, "0");
  const paddedNumber = fillWithZeros(1996, 8);
  console.log(paddedNumber);

  // ? =======> 4: Timestamp

  const currentTimestamp = +new Date("2023-07-13");
  console.log(currentTimestamp);

  // ? =======> 5: Rounding Off To Precise Decimals

  const roundNumTo2 = (num, decimal) => Math.round(num * 10 ** decimal) / 10 ** decimal;
  const numTo2Results = roundNumTo2(31.788862, 2);
  console.log(numTo2Results);

  // ? =======> 6: Determining Parity

  const oddOrEvenNum = num => !!(num & 1) ? "odd" : "even";
  const oddEvenResults = oddOrEvenNum(676);
  console.log(oddEvenResults);

  // * Search for the Math.min / Math.max to find shorthand impl of the same down in this logic file 

// #####    13072023    #####

// #####  Day30:  12072023    #####

  // ! String Tips

  // ? =======> 1: Generating Random ID

  const randomId = len => Math.random().toString(36).substring(3, len);
  const id = randomId(10);
  console.log(id);

  // ? =======> 2: Formatting Money

  // * Below code is commented out since it's breaking something, to investigate the replace function
  // const thousandNum = num => num.toString().replace(/\B(?=9\d{3})+(?!\d))/g, ",");
  // const money = thousandNum(202319962022);
  // console.log(money);
  
  // ? =======> 3: Generating Star Ratings

  const starScore = rate => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
  const stars = starScore(3);
  console.log(stars);

  // ? =======> 4: Generating Random HEX COlor Values

  const randomColor = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
  const color = randomColor();
  console.log(color);

  // ? =======> 5: Operation URL Query Parameters
  
  const params = new URLSearchParams(location.search.replace(/\?/ig, ""));
  // location.search = "?name=young&sex=male"
  params.has("young"); // true
  params.get("sex"); // male

// #####    12072023    #####



// TODO 2 // Challenge 2: https://javascript.plainenglish.io/13-javascript-best-practices-7d293cacad00
// TODO 2 Is Now DONE!!! -----> JavaScript Best Practices


// #####  Day29:  11072023    #####

  // ? =======> JavaScript Libraries and Frameworks
  // * JS libraries and frameworks such as jQuery and React help to organize and clean up your code saving u time & effort

  // jQUERY
    // $("button").click(event => {
    //   console.log("button clicked!");
    // });

  // React
    // function Button({ onClick }) {
    //   return <button onClick={onClick}>Click me!</button>;
    // };
    // ReactDOM.render(
    //   <Button onClick={() => console.log('Clicked!')}/>,
    //   document.getElementById("root")
    // );

// #####    11072023    #####

// #####  Day28:  10072023    #####

  // ? =======> Using modern JavaScript features
  // * These features include async/await,
  // * async/await feature makes promises easier to write

  async function getData() {
    let response = await fetch("https://gracerestorationchurch.com");
    let data = await response.json();
    return data;
  }
  getData().then(data => console.log(data));
  
// #####    10072023    #####

// #####  Day27:  09072023    #####

  // ? =======> Using promises
  // * Promises are a powerful tool for handling asynchronous operations in JS
  // * Having a solid understanding of promises will help you write code more effective

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello promise world..."), 1000);
  });
  promise.then(message => console.log(message));  

// #####    09072023    #####

// #####  Day26:  08072023    #####

  // ? =======> Using 'null' and 'undefined' appropriately
  // * Null - is a primitive type in JS that represents an empty value;
    // * thus, when a variable is set to null, it basically means it has no value.
  // * undefined - contrarily means that a variable has been declared but has not yet been assigned a value.
  
  let message;
  console.log(message === undefined);

  let message0 = null;
  console.log(message0 === null);

// #####    08072023    #####

// #####  Day25:  ...@070723    #####
// ! changed my VS610642 password for the last time 

  // ? =======> Global Variables
  // * Global Variables - are variables declared outside of the function and thus have a global scope
  // * In a JS program, they can be accessed from anywhere &,
    // * thus should be handled with care and used wisely: 
        // * to avoid naming collisions
        // * and they also are considered poor practices

  // global variable 
  var shaviya = "Hello, that is my name...";

  function callOut() {
    console.log(shaviya)
  };
  // console.log(callOut())
  callOut();

// #####    07072023    #####

// #####  Day24:  06072023    #####

  // ? =======> Object Destructuring
  // * Object Destructuring - is a technique for removing values from objects and optimizing the code
  // * This technique allows one to access the information contained in objects such as Arrays, Objects 
    // * and maps and assign them to new variables
  // * This technique allows for the quick creation of variables from the object's properties

  let me = {
    mySurname: "Shaviya",
    age: 27
  };

  let {mySurname, age} = me;

  console.log(mySurname, age);

// #####    06072023    #####

// #####  Day23:  05072023    #####

  // ? =======> Template Literals (``)
  // * Template Literals - are enclosed in backticks(``) characters rather than double("") or single quotes('')
  // * It allows variables and express=8ions to be easily interpolated into strings through a method known as "String Interpolation"

  let digicelAddress = "14 Ocean Boulevard";
  console.log(`Digicel is located at ${digicelAddress}`);

// #####    05072023    #####

// #####  Day22:  04072023    #####

  // ? =======> Using Arrow Functions

  // longhand
  function add3Num(a, b, c) {
    return a + b + c;
  };
  console.log(add3Num(5, 5, 5));

  // shorthand using Arrow Function 
  let add3Numbers = (a, b, c) => a + b + c;
  console.log(add3Numbers(6, 6, 6));

// #####    04072023    #####

// #####  Day21:  03072023    #####

  // ? =======> Using Built-In functions

  let num21 = 833.831;
  let newNum21 = Math.floor(num21);
  let teldaNewNum21 = +num21;

  console.log(newNum21);
  console.log(teldaNewNum21);

  // * Using built-in functions simplify and enhance your code;
  // * there are numerous built-in functions that can simplify your work 

// #####    03072023    #####

// #####  Day20:  27062023    #####

  // ? =======> Writing modular code

  function add2Numbers(a, b) {
    return a + b;
  }
  function subtract2Numbers(b, a) {
    return b - a;
  }
  console.log(add2Numbers(20, 80));
  console.log(subtract2Numbers(80, 20));

  // * Modular code is code that is divided into manageable, and reusable functions;
  //   * and thus gives us an easy time when it comes to testing and maintaining the code.

// #####    27062023    #####

// #####  Day19:  15062023    #####

  // ? =======> Using `===` Operator instead of `==` Operator
  // * Double equal converts type and checks for only VALUE equality;
  // * Triple equal on the other hand does not convert type but checks for both TYPE and VALUE

  const j = 10;
  const k = "10";

  // Using `==` Operator (type coercion allowed)
  console.log(j == k); // true
  //  Using `===` Operator (type coercion not allowed)
  console.log(j === k) // false
  // It will be false since j and k are of different types 
  // Thus if you use `===` Operator, you won't get unexpected results and thus this is the recommended Operator

// #####    15062023    #####

// #####  Day18:  13062023    #####

  // ? =======> Using 'let' and 'const' instead of 'var'
  // * Use `let` - if you know the value of the variable
  // * Use `const` - if you don't know the value of the variable

  let greetings2Renae = "Hello Renae Beckford,";
  const pi = 3.14;

// #####    13062023    #####

// #####  Day17:  12062023    #####

  // ? =======> Using: 'use strict' mode...
  // * "use strict" mode is helpful in:
            // * - imposing strict coding standards
            // * - identifying any issues in the code early
            // * - allowing you avoid undeclared variables thus improving code quality
  
  /*
  "use strict";
  */
  s = 1; // this will cause an error to the entire logic when "use strict" is activated, just like with it on, the other below logics wld not be activated
  console.log(s)

// #####    12062023    #####



// TODO 1 // Challenge 1: https://javascript.plainenglish.io/15-javascript-shorthand-ultimate-cheatsheet-d1f71a363a90   
// TODO 1 That Is Now DONE!!! -----> JavaScript Shorthand Techniques


// #####  Day16:  10062023    #####

  // ? =======> Removing Properties from Objects
  // The delete operator allows you to delete a number of properties from an object

  let famObject = {
    "mother":"Jane",
    "bro":"Norris",
    "sis":"Josphine",
    "me":"Victor",
    "dad":"David"
  }

  delete famObject.dad;
  delete famObject.me;
  console.log(famObject)

  // Alternatively you can use the Object.assign() method to create a new object with the desired properties removed.

  let family = {
    "mother":"Jane",
    "bro":"Norris",
    "sis":"Josphine",
    "me":"Victor",
    "dad":"David"
  }

  let famAlive = Object.assign({}, family);
  delete famAlive.dad
  console.log(family)
  console.log(famAlive)

  // In modern JavaScript (ES6 and later), you can use the Object.fromEntries() and Object.entries() methods 
    // to remove multiple properties from an object
  let family0 = {
    "mother":"Jane",
    "bro":"Norris",
    "sis":"Josphine",
    "me":"Victor",
    "dad":"David"
  }

  let famObject0 = Object.fromEntries(
    Object.entries(family0).filter(([key]) => key !== 'dad' && key !== 'me')
  )
  console.log(famObject0)

// #####    10062023    #####

// #####  Day14:  08062023    #####

  // ? =======> Checking Multiple Conditions
  // This can be done by using several methods:

  // 1) Using the && (and) Operator:
    // This operator allows you to check if multiple conditions are TRUE 

  function myFunc() {
    if (x > 0 && y < 10) {
    // execute some code
    }
  }
  // The code inside the block will only execute if both conditions are TRUE

  // 2) Using the || (or) Operator:
    // This operator allows you to check if at least one of the multiple conditions is TRUE 

  function myFunc() {
    if (x === 1 || x === 2 || x === 3) {
      // execute some code
    }
  }
  // The code inside the block will only execute if equal in type and value to either 1, 2 OR 3

  // ! Important
  // the && and || operators have a specific  order of preference;
    // so you may need to use parenthesis to group conditions in the way you want

  // 3) Using the switch statement:
    // This allows you to check multiple conditions and execute different code blocks depending on the value of a given expression.

  function myFunc() {
    switch(y) {
      case 1:
        // execute some code 
        break;
      case 2:
        // execute some code 
        break;
      case 3:
        // execute some code 
        break;
      default:
        // execute some code 
    }
  }
  // The above logic will execute the code inside the case block that matches the value of y;
    // and if none of the cases match, the code inside the default block will be executed

  // 4) Array.prototype.includes()
  // The Array.prototype.includes() method also helps to check multiple conditions in Javascript
  
  const value = 2;
  if ([1, 'one', 2, 'two'].includes(value)) {
    console.log("Yeah the value of 2 is present in the Array")
  }
  else 
  console.log("Nope, the value is not present in the Array")
  // The Array.prototype.includes() function checks to see whether a value is present in an Array.
  // The code inside the IF block will run if the value is present;
    // if the value cannot be found in the Array, then the code in the else block will be executed

// #####    08062023    #####

// #####  Day13:  07062023    #####

  // ? =======> Swapping two variables
  // To swap the values of 2 variables, you can use different methods

  //  -> Longhand
  let m = 8;
  let n = 2;

  let temporary = m;
  m = n;
  n = temporary;
  console.log(n)
  console.log(m)
  /**  In the example above, we create a temporary variable(temporary) to store the value of m;
   *   then assign the value of m to the value of n and the value of n to the value of temporary
   * thus: m = 2 && n = 8
   */

  //  -> Shorthand 
  let o = 8;
  let p = 2;
  [o, p] = [p, o];
  console.log(p)
  console.log(o)
  /**  The above example uses the destructuring assignment method to reassign values of variables without the need for a temporary variable
   *   Destructuring assignment thus becomes a convenient way to swap values and assign variables to the elements of an array or object
   *  thus: o = 2 && p = 8
   */

// #####    07062023    #####

// #####  Day12:  06062023    #####

  // ? =======> Ternary Operator Implementation
  // This is also called the Conditional Operator or the Ternary Conditional Operator 

  // basic syntax of Ternary Operator
  // condition ? value_if_condition_is_TRUE : value_if_condition_is_FALSE

  // eg
  function feeCharge(isMember) {
    return (isMember ? $100 : $200);
    condition ? value_if_condition_is_TRUE : value_if_condition_is_FALSE
  }
  /* The Ternary Conditional Operator can be helpful for expressing Conditional logic in a single line
      despite the fact that it can be more challenging to read & understand than the if-else statement
      It is however a good idea to use Ternary Operator when the conditional logic becomes more complicated */

  //  -> Longhand 
  // Using the if-else statement
  let ten = 100;
  let twenty = 20;

  if (twenty > ten) {
    maxSize = twenty;
  }
  else maxSize = ten;
  console.log(maxSize)

  //  -> Shorthand 
  let two = 200;
  let four = 400;
  let larger = (two < four) ? four : two;
  console.log(larger)

// #####    06062023    #####

// #####  Day11:  05062023    #####

  // ? =======> Setting a Default Value to a Function Parameter
  // In JSON, u can assign default values to function parameters in several ways
  //  -> Longhand 
  function greetings(name) {
    name = name || "Anonymous";
    console.log(`Hello, ${name}`)
  }
  // In the above example, we give `name` parameter a default value "anonymous";
    // this way when the function is called and no value is passed for the function parameter, the default value is used
  
  //  -> Shorthand 
  function greetings(name = "Anonymous") {
    console.log(`Hello, ${name}`)
  }
  // Above, we use the = syntax to assign the default param value

// #####    05062023    #####



// #####  Day10:  04062023    #####

  // ? =======> Double bitwise Not operator(~~) Implementation
  // the tilde operator (~~) can help round a number to the closest/nearest floor integer
  const decimalFloat = 3.543;
  const tildeInt = ~~decimalFloat;
  console.log(tildeInt)

  // tilde operator(~~) can therefore be used in place of Math.floor() method
  const floorThis = 5.99;
  const floorNum = ~~floorThis;
  console.log(floorNum)

  const floorThis1 = 9.99;
  const floorNum1 = Math.floor(floorThis1);
  console.log(floorNum1)

  // tilde operator (~~) can also be used in place of parseInt() function;
  const parseString2Num = "38.8898";
  const tildeStr = ~~parseString2Num;
  console.log(tildeStr)

  const parseString2Num1 = "33.563";
  const tildeStr1 = parseInt(parseString2Num1);
  console.log(tildeStr1)

// #####    04062023    #####



// #####  Day9:  03062023    #####

  // ? =======> Exponentiation Operator(**) for Exponent Power Operation
  // There are several ways of calculating the exponent power of a number in JS 
  //  -> Longhand 
  // Using for loop
  function power(base, exponent) {
    // finding out how many parameters the function expects
    console.log(arguments.length)
    let results = 1;
    for (let i=0; i<exponent; i++) {
      results *= base;
    }
    return results;
  }
  console.log(power(2, 3))

  //  -> Shorthand 
  // Using Math.pow() function
  function power(base, exponent) {
    console.log(arguments.length)
    return Math.pow(base, exponent);
  }
  console.log(power(3, 3))

  // Using the exponentiation operator(**)
  const base = 4;
  const exponent = 2;
  const results = base ** exponent;
  console.log(results)

// #####    03062023    #####



// #####  Day8:  02062023    #####

  // ? =======> Assigning Values to multiple Variables
  //  -> Longhand 
  // Using the individual assignment statement method
  let x;
  let y;
  let z;

  x = 24;
  y = 25;
  z = 26;

  //  -> Shorthand 
  // Destructuring assignment
  let u, v, w;
  [u, v, w] = [21, 22, 23];

  // Using Destructuring assignment to asign values to variables of an object
  const object8 = {propU:21, propV:22, propW:23};
  let propU, propV, propW;
  ({propU, propV, propW} = object8);

// #####    02062023    #####



// #####  Day7:  01062023    #####

  // ? =======> Converting Strings to Numbers
  // This can be done by using several methods:

  // 1) Using either: parseInt() or parseFloat()
    // parseInt() function converts the String to an Int
  const num27 = "27";
  const convertedNum27 = parseInt(num27);
  console.log(convertedNum27)

    // parseFloat() function converts the String to a Float(decimal)
  const pieNum = "3.14";
  const convertedPieNum = parseFloat(pieNum);
  console.log(convertedPieNum)

  // 2) Using the Unary plus operator (+)
    // converts the String to an Int
  const num28 = "28";
  const convertedNum28 = +num28;
  console.log(convertedNum28)

    // ! Important
    // converts the String to an Float/Decimal - unlike the Double tilde operator/parseInt()/Math.floor() that floor the number
  const floatPieNum = "3.1427";
  const convertedFloatPieNum = +floatPieNum;
  console.log(convertedFloatPieNum)

    // converts the String to a negative Int number
  const negativeNum = "-27";
  const convertedNegNum = +negativeNum;
  console.log(convertedNegNum)

// #####    01062023    #####



// #####  Day6:  31052023    #####

  // ? =======> Finding Max && Min value in an Array
  //  -> Longhand 
  // Finding the maximum number in an Array
  const numArray1 = [33, 12, 7, 24, 3, 15, 9];
  let maxNum = numArray1[0];

  for (let i=1; i<numArray1.length; i++) {
    if (numArray1[i] > maxNum)
    maxNum = numArray1[i];
  }
  console.log(maxNum)

  // Finding the minimum number in an Array
  const numArray2 = [33, 12, 7, 24, 3, 15, 9];
  let minNum = numArray2[0];

  for (let i=1; i<numArray2.length; i++) {
    if (numArray2[i] < minNum)
    minNum = numArray2[i];
  }
  console.log(minNum)

  //  -> Shorthand 
  // Using built in methods: Math.max() && Math.min()

  // Finding the maximum number in an Array
  const numArray3 = [33, 12, 7, 24, 3, 15, 49];
  const maxNum1 = Math.max(...numArray3);
  console.log(maxNum1)

  // Finding the minimum number in an Array
  const numArray4 = [33, 1, 7, 24, 3, 15, 49];
  const minNum1 = Math.min(...numArray4);
  console.log(minNum1)

// #####    31052023    #####



// #####  Day5:  30052023    #####

  // ? =======> Converting String to Array
  /**
   * We can use the split() method to convert a String to an Array
   *  The split() method splits a String into substrings using a seperator string or a regular expression
   */

  //  -> Longhand 
  let string = "Norris Ambune, Josphine Mbaisi, Victor Shaviya";
  // adding the trailing space as part of the seperator string/ RegEx 
  let array3 = string.split(", ");
  console.log(array3)


  //  -> Shorthand 
  let string1 = "Jane Migaliza, Hycine Mapendo, Fidel Nafula";
  let array4 = [...string1.split(",")];
  console.log(array4)


  /**
   * Iterating over the characters of a String using a for loop
   *  and converting the characters of the string into an array using the push() method
   */
  let stringToIterate = "Andrew Hylton, Rosue Walford, Chadan Huggup";
  let array6 = [];
  for (let i=0; i<stringToIterate.length; i++) {
    array6.push(stringToIterate[i])
  }
  console.log(array6)
  
// #####    30052023    #####



// #####  Day4:  29052023    #####

  // ? =======> JavaScript Loops
  /**
   * JavaScript provides several types of loops for repeating code blocks as long as a certain defined condition passes:
   *  for loop; for-in loop; for-of loop 
   */

  /**
   * 1) for loop
   *    It has 3 parts: the initial index variable initialization of the for-loop; the loop condition; either the increament or decreament expression
   *    The loop will keep running as long as the condition is true 
   */
  for (let i=4; i<=5; i++) {
    console.log(i)
  }

  /**
   * 2) for-in loop
   *    This loop allows us to iterate over an object's properties
   */
  // let object = {'a':'1', 'b':'2'} //or
  let object = {a:1, b:2, c:3};
  for (let property in object) {
    console.log(property + ":" + object[property])
  }

  /**
   * 3) for-of loop
   *    This loop iterates over values IF the iterable object is an Array or String
   */
  let array = ['Norris', 'Jos', 'Vic'];
  for (let element of array) {
    console.log(element)
  }

// #####    29052023    #####



// #####  Day3:  28052023    #####

  // ? =======> Determining the Parameters a function accepts
  /**
   * You can find the number of parameters a function accepts using the below 2 methods:
   *  -> Method 1 
   *  -- Based on the number of arguments in the function definition;
   *      the length property of a function returns the number of arguments that the function expects to receive.
   */

  function myFunction(a, b, c, d) {
    // function body
  }
  console.log(myFunction.length)

  /**
   * -> Method 2
   *  -- The parameters passed to a function are stored in an object called an argument, which looks like an array;
   *      using the length property of the argument object, you can find how many objects were passed to the function
   *      however, you cannot use the arguments object to figure out how many arguments a function expects from outside the function
   *      coz it is only accessible inside the function.
   */
  // Method 1 thus becomes the better choice

  function myFunction2(a, b, c) {
    console.log(arguments.length)
  }
  myFunction2(1, 2, 3);

// #####    28052023    #####



// #####  Day2:  27052023    #####

  // ? =======> Combining of Arrays
  //  -> Longhand 
  /**
   * -- Using a for Loop and push() method
   * initialize the values of arrays to be concatinated and their final value initialized to an empty array
   * using push() method in a for loop to add the the arrays to our final array combination
   */

  var array1 = [10, 20, 30];
  var array2 = [40, 50, 60];
  var combinedArray1 = [];

  for (let i=0; i<array1.length; i++) {
    combinedArray1.push(array1[i])
  }
  for (let i=0; i<array2.length; i++) {
    combinedArray1.push(array2[i])
  }
  console.log(combinedArray1)


  //  -> Shorthand 
  /**
   * -- Using either concat(), ..., and reduce() methods
   * concat() and ... methods combine the elements of the arrays by appending the elements of the 2nd to the end of the 1st array unlike the reduce() method
   */

    // concatenation using concat() method
  var array1 = [10, 20, 30];
  var array2 = [40, 50, 60];
  var combinedArray2 = array1.concat(array2);
  console.log(combinedArray2)

    // concatenation using ... method
  var array1 = [10, 20, 30];
  var array2 = [40, 50, 60];
  var combinedArray3 = [...array1, ...array2];
  console.log(combinedArray3)
    
    // concatenation using reduce() method
  var array1 = [10, 20, 30];
  var array2 = [40, 50, 60];
  // array2 will be added 1st then array1
  var combinedArray4 = array1.reduce((previous, next) => previous.concat(next), array2);
  // array1 will be added 1st then array2 
  var combinedArray5 = array2.reduce((previous, next) => previous.concat(next), array1);
  console.log(combinedArray4)
  console.log(combinedArray5)

// #####    27052023    #####



// #####  Day1:  26052023    #####

  // ? =======> Repeating a String 
  //  -> Longhand 
  /**
   * -- Using a for Loop to repeat a String multiple times
   * initialize an empty String
   * for loop that increases by index until it gets to the defined number
   *  equitting the initialized empty string to take the defined String incrementally
   */

  function repeatString(String, number) {
    let results = '';
    for (let i=0; i<number; i++) {
      results += String
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
