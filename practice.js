const PI = 3.14;
let radius = 2;
let area = PI * radius * radius;
console.log(area);

let firstName = "Curtis";
firstName += " Aliwah";
console.log(firstName);

let fullName = "My name is " + firstName;
console.log(fullName);

let fullName2 = "My " + "Name " + "is " + firstName;
console.log(fullName2);

let list = "string1\nstring2\n\tstring3\n\t\\strfing4";
console.log(list);

let sentence = 'The waiter said "Let me take your order".';
console.log(sentence);

let reply = 'I then replied "let me have a coke and fries".';
console.log(reply);

let name3 = "Samantha";
let lengthOfString = name3.length;
console.log(lengthOfString);

let firstLetter;
firstLetter = name3[0];
console.log(firstLetter);

let lastLetter;
lastLetter = name3[name3.length - 1];
console.log(lastLetter);

let array1 = [10, 20, 30, 40];
let character1 = array1[0];
console.log(character1);

array1[1] = 35;
console.log(array1);

let array2 = [
    ["Ferdinand", 20],
    ["John", 35],
];
console.log(array2[0][1]);
let sentence1 =
    "His name is " + array2[0][0] + " and he is " + array2[0][1] + " years old.";
console.log(sentence1);

array2.push(["Mike", 40], ["Cena", 29]);
console.log(array2);

let removedElement = array2.pop();
console.log(removedElement);

let nuymber1 = 10;
let number2 = 30;
let answer = 0;

function mathMultiplication() {
    ans = nuymber1 * number2;
    console.log(ans);
}
mathMultiplication();

function mathDivision() {
    ans = nuymber1 / number2;
    console.log(ans);
}
mathDivision();

function functionMath(a, b) {
    return a * b;
}
console.log(functionMath(2, 3));

let ourSum = 0;

function sum(dig1, dig2) {
    return dig1 + dig2;
}
ourSum = sum(5, 12);
console.log(ourSum);

function nextInLine(arr, item) {
    item = 10;
    arr = [1, 2, 3];

    arr.push(item);
    removedFromNextInLine = arr.shift();
    return removedFromNextInLine;
}
console.log(nextInLine());

function shoppingCheckOut(arr, item) {
    arr = ["Milk ", "Bread ", "Biscuits "];
    item = "Sugar";
    arr.shift();
    arr.push(item);
    return arr;
}
console.log("Updated list: " + shoppingCheckOut());

function testingEqual(val) {
    if (val == 7) {
        return val + " is equal to 7";
    }
    return val + " is not equal to 7";
}
console.log(testingEqual(7));

function OddorEven(val) {
    let result = 0;
    result = val % 2;
    if (result == 0) {
        return val + " is an even number";
    } else {
        return val + " is an odd number";
    }
}
console.log(OddorEven(7));
console.log(OddorEven(8));
console.log(OddorEven(23));
console.log(OddorEven(1000));

//GOLF COURSE SYSTEM DETERMINING STROKES NEEDED FOR EACH PAR AND THEIR NICKNAMES

//par is the number of strokes needed to complete a hole
const names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!",
];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes == par - 2 || strokes < par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes == par + 3 || strokes > par + 3) {
        return names[6];
    }
}

console.log(golfScore(4, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(4, 9));

function shopCart(latest) {
    // list = ["Bread", "Milk", "Juice"];

    if (latest === "Bread") {
        return "You recently added " + latest + " to the list";
    } else if (latest === "Milk") {
        return "You recently added " + latest + " to the list";
    } else if (latest === "Juice") {
        return "You recently added " + latest + " to the list";
    } else {
        return "You have not recently added anything to the list";
    }
}
console.log(shopCart("Bread"));
console.log(shopCart("Juice"));
console.log(shopCart("Milk"));
console.log(shopCart(""));

//area of right angles triangle with base and height given
function areaOfTriangle(base, height) {
    let area = 0;
    area = (base * height) / 2;
    return area;
}
console.log(areaOfTriangle(5, 7));

//area of scalene, isocles, equilateral triangle with three sides given

function areaOfThreeSideTri(side1, side2, side3) {
    let semiPerimeter = (side1 + side2 + side3) / 2;
    let area = 0;
    let ans = 0;

    area =
        semiPerimeter *
        (semiPerimeter - side1) *
        (semiPerimeter - side2) *
        (semiPerimeter - side3);
    ans = Math.sqrt(area);
    //Math.sqrt() function is used to find the square root of a number that is passed inside the parenthesis

    return ans;
}
console.log(areaOfThreeSideTri(3, 6, 7));
console.log(areaOfThreeSideTri(5, 6, 7));

//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

//use of the ternary operator
// (condition) ? expression1 : expression2
//if the condition here evaluates to true then expression1 is executed
//if false then expression2 will be executed
function checkLeapYear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(checkLeapYear(2016));
console.log(checkLeapYear(1700)); //1700 should not be a leap year

function easyLeapYear(year) {
    if (year % 4 === 0) {
        return year + " is a leap year";
    } else {
        return year + " is not a leap year";
    }
}
console.log(easyLeapYear(2016));
console.log(easyLeapYear(2013));
console.log(easyLeapYear(2000));

//Write a JavaScript program to calculate multiplication and division of two numbers
function multiply(num1, num2) {
    ans = num1 * num2;
    return num1 + " multiplied by " + num2 + " is " + ans;
}

function divide(num1, num2) {
    ans = num1 / num2;
    return num1 + " divided by " + num2 + " is " + ans;
}

console.log(multiply(10, 2));
console.log(divide(10, 2));

/*Write a JavaScript program to compute the sum of the two given integers.
 If the two values are same, then returns triple their sum.*/
function tripleSum(num1, num2) {
    ans = num1 + num2;
    if (num1 === num2) {
        return ans * 3;
    } else {
        return ans;
    }
}
console.log(tripleSum(1, 2));
console.log(tripleSum(2, 2)); //will give me triple the answer since both values are similar

//Program that counts cards in a game of Blackjack
let count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count = count + 1;
            break;

        case 7:
        case 8:
        case 9:
            count = count + 0;
            break;

        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count = count - 1;
            break;
    }
    if (count > 0) {
        return count + " " + "Bet";
    } else if (count <= 0) {
        return count + " " + "Hold";
    }
    return count;
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc("K"));
console.log(cc("A"));

/*Write a JavaScript program to check two given numbers 
and return true if one of the number is 50 
or if their sum is 50*/
let result = " ";

function checkFifty(num1, num2) {
    if (num1 === 50 || num2 === 50) {
        result = "true";
    } else if (num1 + num2 === 50) {
        result = "true";
    } else {
        result = "false";
    }
    return result;
}
console.log(checkFifty(50, 34));
console.log(checkFifty(40, 10));
console.log(checkFifty(25, 23));

//Write a JavaScript program that accept two integers and display the larger
function printLarge(num1, num2) {
    let result = " ";
    if (num1 > num2) {
        result = num1;
    } else if (num2 > num1) {
        result = num2;
    } else {
        result = "The two numbers are the same";
    }
    return result;
}
console.log(printLarge(2, 3));
console.log(printLarge(2, 2));
console.log(printLarge(7, 3));

//Write a JavaScript conditional statement to find the largest of five numbers.
//Sample numbers : -5, -2, -6, 0, -1
//Output : 0
function largestNo(a, b, c, d, e) {
    let result = " ";
    if (a > b && a > c && a > d && a > e) {
        result = a + " is the largest of the five numbers";
    } else if (b > a && b > c && b > d && b > e) {
        result = b + " is the largest of the five numbers";
    } else if (c > a && c > b && c > d && c > e) {
        result = c + " is the largest of the five numbers";
    } else if (d > a && d > b && d > c && d > e) {
        result = d + " is the largest of the five numbers";
    } else {
        result = e + " is the largest of the five numbers";
    }
    return result;
}
console.log(largestNo(-5, -2, -6, 0, -1));

//Write a JavaScript program which compute, the average marks of the following students
// Then, this average is used to determine the corresponding grade.
function checkGrade() {
    let marks = [80, 77, 88, 95, 68];
    let sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
    let avg = sum / 5;
    let grade = " ";

    if (avg <= 60) {
        grade = "Grade: F";
    } else if (avg > 60 && avg <= 70) {
        grade = "Grade: D";
    } else if (avg > 70 && avg <= 80) {
        grade = "Grade: C";
    } else if (avg > 80 && avg <= 90) {
        grade = "Grade: B";
    } else if (avg > 90 && avg <= 100) {
        grade = "Grade: A";
    }
    return grade;
}
console.log(checkGrade());

//Write a JavaScript program to find the largest of three given integers
function checkLargest(num1, num2, num3) {
    let result = " ";

    if (num1 > num2 && num1 > num3) {
        result = num1 + " is the largest of the three numbers";
    } else if (num2 > num1 && num2 > num3) {
        result = num2 + " is the largest of the three numbers";
    } else if (num3 > num1 && num3 > num2) {
        result = num3 + " is the largest of the three numbers";
    } else {
        result = "All the numbers are the same";
    }
    return result;
}
console.log(checkLargest(2, 3, 5));
console.log(checkLargest(2, 7, 5));
console.log(checkLargest(4, 4, 4));

//Write a JavaScript program to compute the sum of the two given integers,
// If the sum is in the range 50..80 return 65 other wise return 80.
function checkSum(num1, num2) {
    let result = " ";

    result = num1 + num2;

    if (result >= 50 && result <= 80) {
        return 65;
    } else {
        return 80;
    }
}
console.log(checkSum(30, 30));
console.log(checkSum(30, 70));

//Write a JavaScript program to check from two given integers
//whether one of them is 8 or their sum or difference is 8
function checkEight(num1, num2) {
    let result = " ";
    let sum = num1 + num2;
    let difference = num1 - num2;

    if (num1 === 8 || num2 === 8) {
        result = "One of the numbers is eight";
    } else if (sum === 8) {
        result = "The sum of both numbers is eight";
    } else if (difference === 8) {
        result = "The difference of both numbers is eight";
    } else {
        result = "Invalid";
    }
    return result;
}
console.log(checkEight(1, 1));
console.log(checkEight(1, 8));
console.log(checkEight(4, 4));
console.log(checkEight(17, 9));

//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
//[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
function convertTemp(celsius) {
    let fahrenheit = " ";
    fahrenheit = celsius * 1.8 + 32;
    return celsius + " degrees celsius is " + fahrenheit + " degrees farenheit";
}
console.log(convertTemp(0));
console.log(convertTemp(32));

let shoeStore = {
    Nike: ["AirForce1", "AirJordans", "SbDunks"],
    Adidas: ["Yeezy", "Superstars"],
    Puma: ["Suede"],
};

let shopList = shoeStore.Nike[2];
console.log(shopList);

const testObj = {
    "the breakfast": "bread",
    "the lunch": "fries",
    "the supper": "hamburger",
};

let foodAteBreakfast = testObj["the breakfast"];
console.log(foodAteBreakfast);

let foodAteLunch = testObj["the lunch"];
console.log(foodAteLunch);

let foodAteSupper = testObj["the supper"];
console.log(foodAteSupper);


const employees = [
    { id: 15, empName: 'John', dept: 'Support' },
    { id: 135, empName: 'Alex', dept: 'IT' },
    { id: 18, empName: 'Judas', dept: 'Support' },
    { id: 20, empName: 'Max', dept: 'IT' },
];

console.table(employees);



//Declare and initialize a variable total to 0.
//Use a for loop to add the value of each element of the myArr array to total
//Total should equal 20
const thisArr = [2, 3, 4, 5, 6];

for (let i = 0; i < thisArr.length; i++) {
    console.log(thisArr[i]);
}

let total = 0;
for (let i = 0; i < thisArr.length; i++) {
    console.log(total += thisArr[i]);

}



//Modify function multiplyAll so that it returns the product of all the numbers in the sub - arrays of arr.
function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
console.log(multiplyAll([[1, 2], [3, 4], [5, 6]]));
console.log(multiplyAll([[1], [2], [3]]));


//he function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
//If both are true, then return the "value" of that property.
//If name does not correspond to any contacts then return the string No such contact.
//If prop does not correspond to any valid properties of a contact found to match name then return the string No such property

const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (name === contacts[i].firstName && contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else if (contacts[i].hasOwnProperty(prop) === false) {
            return "No such property";
        }
    }
    return "No such contact";
}

//function lookUpProfile(name, prop) {
//    for (let x = 0; x < contacts.length; x++) {
//        if (contacts[x].firstName === name) {
//            if (contacts[x].hasOwnProperty(prop)) {
//                return contacts[x][prop];
//            } else {
//                return "No such property";
//            }
//        }
//    }
//    return "No such contact";
//}

console.log(lookUpProfile("Bob", "potato"));

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Akira", "lastName"));
console.log(lookUpProfile("Akira", "address"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Sherlock", "likes"));



//write a recursive function that returns an array containing the numbers 1 through n
//the function would accept a parameter , n , which is the final number to be reached
//then it will need to call itself progressively with smaller values of n until it reaches 1

function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5));



//write a recursive function that returns an array containing the numbers n through 1
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray2 = countdown(n - 1);
        countArray2.unshift(n);
        return countArray2
    }
}
console.log(countdown(5));
console.log(countdown(10));



//The function should return an array of integers which begins with a number represented by the startNum parameter
// and ends with a number represented by the endNum parameter.
function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    } else {
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}
console.log(rangeOfNumbers(15, 15));
console.log(rangeOfNumbers(15, 17));
console.log(rangeOfNumbers(19, 17));


//Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7
function multiples(num) {
    let result1 = 0;
    let result2 = 0;

    result1 = num % 3;
    result2 = num % 7;

    return (result1 === 0) ? "Multiple of 3"
        : (result2 === 0) ? "Multiple of 7"
            : "Not a multiple of either";

}
console.log(multiples(3));
console.log(multiples(28));
console.log(multiples(30));
console.log(multiples(56));



//Program to calculate area of circle
//Formula = PI * r * r
const CIRCLE_PI = 3.14159265359;

function circleArea(radius) {
    result = CIRCLE_PI * radius * radius;
    return result + "cm²";
}
console.log(circleArea(7));