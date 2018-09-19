
var greeting;
greeting = 'Hello, ';

function sayHello(name) {
  var name;
  //name = 'Charlie';
  return greeting + name;
  // TODO: return a greeting string that greets
  // the person by name, e.g. "Hello, Emily!"
}

function sayHelloEverybody(threeNames) {
  var threeNames;
  threeNames = ['Charlie', ' Henry', ' and Leyden'];
  //threeNames[2] = 'and ' + threeNames[2] +'!'

  return greeting + threeNames;

  // TODO: return a greeting string that greets
  // all three people in the threeNames array
  // e.g. "Hello, Emily, MaryClare, and Taurin!"
  // NOTE: inputs should be an array with exactly three items
}

function getClasses() {
  var classes;
  classes = ['Computer Science', ' History', ' Graphic Lit', ' Poetry', ' Conducting', ' Game Audio',];
  return classes;

  // TODO: return an array with a list of strings
  // naming the classes you are taking this semester
}

function labelOrder(fiveNumbers = [a, b, c, d, e]) {
  //var fiveNumbers = [1, 2, 3, 4, 5];
  fiveNumbers[0] = 'First: ' + fiveNumbers[0];
  fiveNumbers[1] = 'Second: ' + fiveNumbers[1];
  fiveNumbers[2] = 'Third: ' + fiveNumbers[2];
  fiveNumbers[3] = 'Fourth: ' + fiveNumbers[3];
  fiveNumbers[4] = 'Fifth: ' + fiveNumbers[4];
  return fiveNumbers;


  // TODO: Given an array with five numbers, return a new array
  // of strings that have labels for the ordering.
  // e.g. if fiveNumbers is [1,2,3,4,5] your function should return:
  // ["first: 1", "second: 2", "third: 3", "fourth: 4", "fifth: 5"]
  // NOTE: inputs should be an array with exactly five items
}

function calculateVolume(w, l, h) {
  //var w = 3;
  //var l = 4;
  //var h = 5;
  var volume = w * l * h;
  return volume;
  // TODO: given a room's width, length, and height
  // write a function that returns the volume
}

function isOdd(number) {
  var testNumber = number % 2;
  if (testNumber == 0){
    return 'false';} else{
      return 'true';}
    }
  // TODO: given a number, return true if it is odd, false if it is even
  // HINT: the expression "Boolean(0)" is false, "Boolean(1)"" is true
  // DOUBLE HINT: Try using the modulus operator (%)


// ** CART PRICES ** //

const saleAmount = .25; // 25% off!
// NOTE: price is in the html
function getSalePrice(originalPrice) {
  var discount = originalPrice * saleAmount;
  var salePrice = originalPrice - discount;
  return salePrice;}
  // TODO: given a dollar price (e.g. 5.99), return
  // a price with the saleAmount discount applied
  // e.g. if originalPrice is 4.00, your function should return 3.00.
  // (Don't worry about rounding to the correct number of decimal places)


function getSalePrices(cart = [price1, price2, price3]) {
  //var cart = [15, 25, 50];
  var price1 = getSalePrice(cart[0]);
  var price2 = getSalePrice(cart[1]);
  var price3 = getSalePrice(cart[2]);
  var totals = [price1, price2, price3];
  return totals;
  // TODO: given an array of prices for three items in a cart,
  // return a new array with the saleAmount discount applied to each.
  // TIP: see if you can reuse the getSalePrice function that you just wrote!
  // NOTE: inputs should be an array with exactly three items
}

 // ** COUNTING ** //

var counter = 0;
function incrementCounter() {
  counter++;
  showCounter();
  return counter;
  // TODO: implement a function that increments (adds 1) to the counter variable
  // and then calls showCounter to update the interface with the new value.
  // Test your code by opening the developer console and calling incrementCounter.
  // The displayed answer for this question should increase by 1!
}
function showCounter() {
  // updates the counter element with the latest value
  document.getElementById('counter').textContent = counter;
}
