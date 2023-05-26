
// Repeating a String 
//  -> Longhand 
//  -- Using a Loop to repeat a String multiple times 
function repeatString(String, number) {
  let results = '';
  for (let i=0; i<number; i++) {
    results += String
  }
  return results
}
console.log(repeatString('Shaviya', 5));