// TOPIC: Day 1 - Variables and Running Code




// 1. Store your name and your role in two variables. Print them in one line.

const myName = "Raj Shinde";
let myRole = "Tester";

console.log("My Name is", myName, "and role is", myRole, ".")


// 2. Store 15 and 27 in two variables and print their sum.

let num1 = 15;
let num2 = 27;

console.log("Sum of Numbers : ", num1 + num2)

// 3. Start with let count = 10. Increase it by 5, then decrease it by 3. Print the result.

let count = 10;
console.log(count)
count += 5;
console.log(count)
count -= 3;
console.log(count)



// ===================== EASY =====================

// 1. Build a URL
// Store the base URL and the page path in two const variables. Print the full URL.
// Input: baseUrl = "https://shop.com", path = "/login"
// Output: https://shop.com/login

const baseURl = "https://shop.com"
const path = "/login"

console.log(baseURl + path)

// 2. Logged in or not
// Store false in a variable called isLoggedIn. Print the value with a label, then print its type.
// Output:
// Logged in: false
// boolean

let isLoggedIn = false;
console.log("Logged in: " + isLoggedIn)
console.log(typeof (isLoggedIn))

// 3. Browser details
// Store the browser name and version in two variables. Print them in one line.
// Input: browser = "chromium", version = 120
// Output: Browser: chromium | Version: 120

let browserName = "chromium";
let version = 120;
console.log("Browser: " + browserName + " | " + "Version:" + version)

// 4. Open bugs
// Start with let openBugs = 12. 4 bugs get fixed, then 2 new bugs are found.
// Update the variable for each change, then print the result.
// Output: Open bugs: 10
let openBugs = 12;
console.log("open bugs: " + openBugs)
//bug fixed 4
openBugs -= 4;
console.log("open bugs: " + openBugs)
//new bugs 2
openBugs += 2;
console.log("open bugs: " + openBugs)


// 5. Quotes change the type
// Print the type of each value below.
// Input: "5", 5, "true", true
// Output:
// string
// number
// string
// boolean

function typeCheck(inpt) {
    console.log(typeof (inpt))
}
typeCheck("5");
typeCheck(5);
typeCheck("true")
typeCheck(true)


// ===================== MEDIUM =====================

// 6. Cart total
// Store the price, quantity and discount in variables. Calculate the total
// (price x quantity, minus discount) in a new variable and print it.
// Input: price = 499, quantity = 3, discount = 100
// Output: Cart total: 1397

let price = 499;
let quantity = 3;
let discount = 100;

let cartTotal = ((price * quantity) - discount)

console.log("Cart total: " + cartTotal)
// 7. Test duration
// A test started at 1000 ms and ended at 4750 ms. Store both in variables,
// calculate the duration in a third variable and print it.
// Output: Test took 3750 ms
let startTime = 1000;
let endTime = 4750;

let totalTime = startTime + endTime;
console.log("Test took " + totalTime + " ms")

// 8. Average time
// Store three test durations in variables. Calculate the average and print it.
// Input: 1200, 900, 1500
// Output: Average: 1200 ms

let durationFirst = 1200
let durationSecond = 900
let durationThird = 1500

let durationAverage = (durationFirst + durationSecond + durationThird / 3)

console.log("Average: " + durationAverage + " ms")
