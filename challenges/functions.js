// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume (x, y, cb) {
  return cb(x, y);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function cbAdd (a, b) {return a+b;}
function cbMultiply (a, b) {return a*b;}
function cbGreeting (first, last) {return `Hello ${first} ${last}, nice to meet you.`;}

/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,cbAdd); // 4
consume(10,16,cbMultiply); // 160
consume("Mary","Poppins", cbGreeting); // Hello Mary Poppins, nice to meet you!
console.log(`
${consume(2,2,cbAdd)} 
${consume(10,16,cbMultiply)} 
${consume("Mary","Poppins", cbGreeting)}`)

// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Nested function can access "internal" because nestedFunction is able to
// utilize any variables declared in the global scope or it's "parent scope," which is "myFunction". 
const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
