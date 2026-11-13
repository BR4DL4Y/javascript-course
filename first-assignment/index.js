// --- 1. Positive or Negative Number ---
console.log("--- 1. Positive, Negative, or Zero ---");
let number1 = Number(prompt("1. Enter a number:"));
if (number1 > 0) {
    console.log("The number is positive.");
    alert("The number is positive.")
} else if (number1 < 0) {
    console.log("The number is negative.");
    alert("The number is negative.")
} else {
    console.log("The number is zero.");
    alert("The number is zero.");
}

// Adult or nah
console.log("are you an adult? prove it.")
let age = Number(prompt("2. Enter your age"));
if (age >= 18) {
    console.log ("You Are an adult!");
    alert("You Are an adult!");
} else {
    console.log("youre a minor.");
    alert("youre a minor.")
}
// odd or even numbers
console.log("3. EVEN or ODD")
let number2 = Number(prompt("3. Enter a number to check if it's even or odd:"));
if (number2 % 2 === 0) {
    console.log("The number is even.");
    alert("The number is even.");
} else {
    console.log("The number is odd.");
    alert("The number is odd.");
}
// Failed or approved?
console.log("4. failed or approved?")
let number3 = Number(prompt("4. Enter your grade to see if you passed: "));
if (number3 >= 70) {
    console.log("You passe'd.");
    alert("you passed.");
} else {
    console.log("you failed..");
    alert("you failed.");
}
// weekend.. 
let day = Number(prompt("5. Enter a number between 1 and 7: "));
switch (day) {
    case 1:
        console.log("Monday");
        alert("Monday");
        break;
    case 2:
        console.log("Tuesday");
        alert("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        alert("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        alert("Thursday");
        break;
    case 5:
        console.log("Friday");
        alert("Friday");
        break;
    case 6:
        console.log("Saturday");
        alert("Saturday");
        break;
    case 7:
        console.log("Sunday");
        alert("Sunday");
        break;
    default:
        console.log("Invalid number! Please enter a number between 1 and 7.");
        alert("Invalid number! Please enter a number between 1 and 7.");
        break;
}

// greater number
console.log("6. type a number, lets see which one is higher..");
let number4 = Number(prompt("type the first number: "));
let number5 = Number(prompt("type the second number: "));

if (number4 > number5) {
    console.log("The higher number is.. " + number4);
    alert("The higher number is.. " + number4);
} else if (number5 > number4) {
    console.log("The higher number is.. " + number5);
    alert("The higher number is.. " + number5)
} else {
    console.log("theyre the same.");
    alert("theyre the same.");
}

// 24 hours

console.log("7. what time is it?")
let hour = Number(prompt("Type a number between 0 and 24: "));
if (hour >= 0 && hour <= 11) {
    console.log("its morning!");
    alert("its morning!"); 
} else if (hour >= 12 && hour <= 18) {
    console.log("its afternoon");
    alert("its afternoon");
} else if (hour >= 19 && hour <= 24 ) {
    console.log("its noon.. (go to sleep!!!)");
    alert("its noon.. (go to sleep!!!)");
} else {
    console.log("please, a number between 0 and 24");
    alert("please, a number between 0 and 24");
}
// 1 and 100

console.log("8. ype number betwween 1 and 100:");
let number6 = Number(prompt("Type a number between 1 and 100: "));
if (number6 >= 1 && number6 <= 100) {
    console.log("its in range");
    alert("its in range");
} else{
    console.log("it is not in range");
    alert("it is not in range");
}
// month 
console.log("9. month")
let month = Number(prompt("Enter a number from 1 to 12:"));

if (month === 1) {
    console.log("January");
    alert("January");
} else if (month === 2) {
    console.log("February");
    alert("February");
} else if (month === 3) {
    console.log("March");
    alert("March");
} else if (month === 4) {
    console.log("April");
    alert("April");
} else if (month === 5) {
    console.log("May");
    alert("May");
} else if (month === 6) {
    console.log("June");
    alert("June");
} else if (month === 7) {
    console.log("July");
    alert("July");
} else if (month === 8) {
    console.log("August");
    alert("August");
} else if (month === 9) {
    console.log("September");
    alert("September");
} else if (month === 10) {
    console.log("October");
    alert("October");
} else if (month === 11) {
    console.log("November");
    alert("November");
} else if (month === 12) {
    console.log("December");
    alert("December");
} else {
    console.log("Invalid number. It must be from 1 to 12.");
    alert("Invalid number.");
}

// 10. idk
console.log(".10 will you reach 100?")
let number7 = Number(prompt("Type the first number: "));
let number8 = Number(prompt("Type the second number: "));

if (number7 * number8 > 100) {
    console.log("you achieved more than 100");
    alert("you achieved more than 100");
} else {
    console.log("you didnt score higher than 100.. sorry!");
    alert("you didnt score higher than 100.. sorry!")
}
