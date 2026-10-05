// DAY 2: Conditions
// Save as day2.js and run with: node day2.js
// Use: if, else if, else, ===, !==, > < >= <=, &&, ||, %
// Plus Day 1: variables, let/const, types, typeof

// ===================== EASY =====================

// 1. Positive, negative or zero
// Check a number and print which one it is.
// Input: num = -4
// Output: Negative

num = -2;
if (num > 0) {
    console.log("Positive")
}
else {
    console.log("Negative")
}
// 2. Dashboard or login page
// If isLoggedIn is true, print "Show dashboard". Otherwise print "Show login page".
// Input: isLoggedIn = false
// Output: Show login page

let isLoggedIn = true;
if (isLoggedIn == true) {
    console.log("Show Dashboard")
}
else {
    console.log("Show Login Page")
}
// 3. Larger number
// Compare two numbers and print the larger one. If they are equal, print "Both are equal".
// Input: a = 45, b = 78
// Output: 78 is larger
let a = 155;
let b = 78;

if (a == b) {
    console.log("Both are Equal")
}
else if (a > b) {
    console.log(a + " is the Greater " + b)
}
else if (b > a) {
    console.log(b + " is the Greater " + a)
}
// 4. Divisible by 5
// Check if a number is divisible by 5.
// Input: num = 35
// Output: 35 is divisible by 5
// Input 2: num = 42
// Output 2: 42 is not divisible by 5

num = 36;
if (num % 5 == 0) {
    console.log(num + " is Divisible By 5")
}
else {
    console.log(num + " is not Divisible By 5")

}


// 5. Sign-up age check
// If age is 18 or more, print "Can create account". Otherwise print "Too young".
// Input: age = 16
// Output: Too young

age = 16;
if (age >= 18) {
    console.log("Can Create Account")
}
else {
    console.log("Too Young")
}

// ===================== MEDIUM =====================

// 6. Grade
// Print the grade for a score:
// 90 and above = A, 75 to 89 = B, 50 to 74 = C, below 50 = Fail
// Input: score = 82
// Output: Grade: B
let score = 82;
if (score > 50 && score < 74) {
    console.log("Grade C")
}
else if (score > 75 && score < 89) {
    console.log("Grade B")
}

else if (score > 90) {
    console.log("Grade A")

}
else {
    console.log("Fail")
}
// 7. Member discount
// Rules:
// - member AND cartTotal is 2000 or more: 20% off
// - member only: 10% off
// - not a member: no discount
// Store the final amount in a variable and print it.
// Input: cartTotal = 2500, isMember = true
// Output: Final amount: 2000
// Input 2: cartTotal = 1500, isMember = true
// Output 2: Final amount: 1350


// 8. Leap year
// A year is a leap year if it is divisible by 4 but not by 100,
// OR if it is divisible by 400.
// Input: year = 2024
// Output: 2024 is a leap year
// Input 2: year = 1900
// Output 2: 1900 is not a leap year


// 9. Check the type first
// If value is a number, print "Valid number". If it is a string, print "Text value: " and the value.
// For anything else, print "Other type".
// Input: value = "42"
// Output: Text value: 42
// Input 2: value = true
// Output 2: Other type


// 10. Response time check
// Below 1000 ms = Fast, 1000 to 2000 ms = Acceptable, above 2000 ms = Slow
// Input: responseTime = 1800
// Output: Acceptable


// ===================== HARD =====================

// 11. Largest of three
// Print the largest of three numbers without using Math.max.
// If two or more numbers share the largest value, still print that value once.
// Input: a = 12, b = 47, c = 33
// Output: Largest: 47
// Input 2: a = 50, b = 50, c = 20
// Output 2: Largest: 50


// 12. Triangle type
// First check if the three sides can form a triangle (each pair of sides added together must be
// greater than the third side). If not, print "Not a triangle".
// If valid, print Equilateral (all equal), Isosceles (two equal) or Scalene (none equal).
// Input: 5, 5, 8
// Output: Isosceles
// Input 2: 1, 2, 10
// Output 2: Not a triangle


// 13. FizzBuzz for one number
// Divisible by 3 and 5 = "FizzBuzz", by 3 only = "Fizz", by 5 only = "Buzz",
// otherwise print the number.
// Input: 15  Output: FizzBuzz
// Input: 9   Output: Fizz
// Input: 10  Output: Buzz
// Input: 7   Output: 7


// ===================== TESTING-BASED =====================

// 14. Status code category
// 200-299 = Success, 300-399 = Redirect, 400-499 = Client error, 500-599 = Server error,
// anything else = Invalid status code
// Input: statusCode = 503
// Output: 503: Server error
// Input 2: statusCode = 302
// Output 2: 302: Redirect
// Input 3: statusCode = 99
// Output 3: 99: Invalid status code


// 15. Login validation
// Check in this order and print the FIRST message that applies:
// 1. username is empty ("")       -> "Username is required"
// 2. password is empty ("")       -> "Password is required"
// 3. isLocked is true             -> "Account is locked"
// 4. username is "qa_user" AND password is "Test@123" -> "Login success"
// 5. otherwise                    -> "Invalid credentials"
//
// Input: username = "qa_user", password = "", isLocked = false
// Output: Password is required
// Input 2: username = "qa_user", password = "Test@123", isLocked = true
// Output 2: Account is locked
// Input 3: username = "qa_user", password = "Test@123", isLocked = false
// Output 3: Login success
// Input 4: username = "tester", password = "Test@123", isLocked = false
// Output 4: Invalid credentials