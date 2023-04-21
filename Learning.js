/*Declaring of variables
This is done using (const), (let) and (var)*/
//Mostly var and const
//const is used for variables that have a value that will not be changed/will be constant
const firstName = "Curtis"; //use of const and let to declare and instantiate variables
const lastName = "Aliwah"; //using const means the that variable cannot be changed later

//Use of (+) and (+=)
let fullName;
fullName = firstName + " " + lastName; //use of + to concatinate/join strings
console.log(fullName);

let str1 = "My name is ";
str1 += "Curtis Aliwah"; //the other way of using + to concatinate strings
console.log(str1);

let string1 = "fun";
let string2 = "Coding JavaScript is "; //another use of += is to append/add a string to the end of another
string2 += string1;
console.log(string2);

let myNoun = "dog";
let myAdjective = "big";
let finalSentence = "That" + " " + myNoun + " " + "is" + " " + myAdjective;
console.log(finalSentence);
//forming strings using variables instead of a name...shows use of +...(" " is used to indicate a space)

//use of the \ escape character (backslash escape character)
const myStr = 'I am a "double quote" string including "double quotes".';
console.log(myStr); //this made use of the backslash escape character
//it was used to use literal quotes in the string

const newStr = 'Alan said "You are not welcome"';
console.log(newStr);

const str2 = "firstLine\n \t\\secondLine\n thirdLine.";
console.log(str2); //another use of backslash escape character
/* \n -- newline
    \t -- tab
    \\ -- backslash
*/

//Use of .length
let lastNameLength = 0;
let lasttName = "Coty";
lastNameLength = lasttName.length; //the .length is used to get the length of a string or variable.
console.log(lastNameLength); // you put it at the end of the string or variable name to be able to find the length

//Use of the square brackets []
let name1FirstLetter = " ";
let name1LastLetter = "";
let name1 = "Aliwah"; //the brackets[]are used to find the character thats at a certain position in a string
name1FirstLetter = name1[0]; // for example name1[0] here finds the character at index 0 in the string
name1LastLetter = name1[5]; //here name1[5] gives us the character that's at index 5 of the string
console.log(name1LastLetter);
console.log(name1FirstLetter);

let myFirstName = "Curtis";
let lastLetterFirstName = myFirstName[myFirstName.length - 1];
console.log(lastLetterFirstName);
//using [variableName.length - 1] is an easier/faster way to get the last character in a string
//you can then change the number on the minus depending on which character from the last you want to get
//eg [variableName - 2] will get the 2nd to last character and so on

//ARRAYS
//declaring a single dimensional array
let footballer = ["Cristiano"];

//declaring a multi-dimensional array
let footballers = [
    ["Cristiano", 7][("Messi", 10)]
];

//Changing values of the array using the index
const myArray = [40, 50, 10];
console.log(myArray); //before the change on index[0]
myArray[0] = 45; //values inside an array are accessed using indexes starting from 0
//this example here changes the value of index [0] in the array from 40 to 45
console.log(myArray); //after the change on index[0]

const thisArray = [45, 34, 56];
const sentence = "The largest number there is " + thisArray[2];
console.log(sentence);
//this was combining the concept of accessing an array value using its index and concatinating a string using the + sign

const myArray2 = [
    //this is how to declare a multi-dimensional array that has alot of dimensions
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12], 13, 14
    ],
];

const myData = myArray2[2][1]; //this is how you access the values in the array
console.log(myData); //the first [] is for accessing the outer array and the second[] accesses the value inside that array
//for example myArray2[0][3] accesses the array at index 0 then accesses the value at index 3 inside this array of index 0
const myData2 = myArray2[3][0][1];
console.log(myData2);

//.push(" ") FUNCTION
/*The .push() function is used to append arrays
it adds anything inside in the parenthesis() to the end of the array*/
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);

let arr2 = ["John", "Mark"];
arr2.push(["Fred", 7]);
console.log(arr2);

let myNum = [10, 23, 34, 45];
myNum.push(58);
console.log(myNum);

//.pop() FUNCTION
/*The .pop() function removes the last element of an array*/
//You can also store this removed element in a different variable
const myArray3 = [
    ["John", 23],
    ["cat", 2],
];
const removedFromArray = myArray3.pop();
console.log(myArray3); //This will only show the first part of the array == ["John", 23]
console.log(removedFromArray); //This shows the last part of the array that was removed

let thisArray1 = ["Haden", "Aliwah", "James", "Lebron"];
thisArray1.pop();
console.log(thisArray1);

//.shift() FUNCTION
//This function removes the first element of an array
//Opposite of .pop()
let mythisArray = ["Cat", "John", "Baby"];
let removedFromThisArray = mythisArray.shift();
console.log(removedFromThisArray);
console.log(mythisArray);

//.unshift(" ") FUNCTION
//It's used to add an element to the beginning of an array
//Opposite of .push()
let ourArray = ["John", 7, "Keny"];
ourArray.shift();
console.log(ourArray);
ourArray.unshift("Peter");
console.log(ourArray);

//FUNCTIONS
//Reusable codes that can be called anywhere in the program
/*FUNCTION SYNTAX
    function functionName(){
        CODE TO BE WRITTEN;
    }
*/
/*CALLING THE FUNCTION
    functionName();
*/
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

function reusableFunction2() {
    let herFirstName = "Coty";
    let herLastName = "Germillac";
    let herFullName = herFirstName + " " + herLastName;
    console.log(herFullName);
}
reusableFunction2();

//Passing Values to Functions with Arguments
function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
}
functionWithArgs(1, 2);
//here param1 and param2 are parameters..they act as placeholders for what is to be called
//the actual values being called are known as arguments
//parameters act as placeholders for arguments
function myStrings(stri1, stri2) {
    console.log(stri1, stri2);
}
myStrings("Hello", "Hi");

//Returning a value from a function
function plusThree(num) {
    return num + 3;
}
console.log(plusThree(5));
//here the function is supposed to add 3 to the argument passed in the parameter
function timesFive(num2) {
    return num2 * 5;
}
console.log(timesFive(5));

//Global scope and functions
//GLOBAL VARIABLE == A variable declared outside the scope of a function which can be seen anywhere in the code
//Variables declared without (let) or (const) are automatically global
let myGlobal = 10; //this is global because its declared outside a function

function func1() {
    oopsGlobal = 5; //this is also global because it's been declared without either (let) or (const)
}

//Local scope and fucntions
//LOCAL VARIABLE == A variable declared inside a function and can only be seen within that function
function myLocalScope() {
    let myVar = 10; //this is a local variable because it's declared inside a function
}

//WHEN A LOCAL AND GLOBAL VARIABLE HAVE THE SAME NAME, THE LOCAL VARIABLE IS WHAT WILL BE DISPLAYED.
let outerWear = "T-shirt";

function myOutfit() {
    let outerWear = "Sweater"; //this is what will be displayed since its a local variable
    return outerWear;
}
console.log(myOutfit());

//Assignmet with a return value
//This is assigning the return value of a function to a variable
let ourSum = 0;

function sum(dig1, dig2) {
    return dig1 + dig2;
}
ourSum = sum(5, 12);
console.log(ourSum);

//Conditional logic(Boolean- true or false) with if statements
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        /*This means that if the condition or parameter is true*/
        return "Yes, that was true"; /*Then the code inside {} will be executed*/
    }
    return "No, that was not true"; /*If wasThatTrue is not true then the code inside {} will not be executed*/
}
console.log(trueOrFalse(true));

//Equality Operator(==)
//the equality operator performs type convertion when comparing 2 different types...eg if comparing a string with an integer it will convert both to either string or integer
//eg...."3"==3 -> true
//'2'==2 -> true
function isEqual(myVal) {
    if (myVal == 10) {
        return "It is equal";
    }
    return "It is not equal";
}
console.log(isEqual(12));
//isEqual will return "It is not equal" because the value at myVal is not 10 -- makes the condition false

console.log(isEqual(10));
//this will return "It is equal" because the value at myValue is 10 -- makes the condition true

//Strict Equality Operator(===)
//Difference between this and the equality operator is that in this type conversion does not happen
//eg...."3"===3 -> false....because "3" is a string and 3 is an integer
function testStrict(val1) {
    if (val1 === 3) {
        return "Equal";
    }
    return "Not equal";
}
console.log(testStrict("3"));

//Inequality operator(!=)
//It means not equal
//Works same way as equality operator in the sense that it will perform type conversion to the things being compared

function testNoEqual(val) {
    if (val != 99) {
        return val + " is not equal to 99";
    }
    return val + " is equal to 99";
}
console.log(testNoEqual(10));
console.log(testNoEqual(99));
console.log(testNoEqual("99")); //brings not equal because here val 99 is an int and '99' is a string

//Strict inequality operator(!==)
//Does not perform type conversion and compares the types the way they are

function testStrictNoEqual(value1) {
    if (value1 !== 17) {
        return value1 + " is not equal to 17";
    }
    return value1 + " is equal to 17";
}
console.log(testStrictNoEqual(17));
console.log(testStrictNoEqual("17")); //brings not equal because 17 is an int and '17' is a string
console.log(testStrictNoEqual(1));

//Greater than operator(>)
//It performs type conversion on the data types being compared

function testGreaterThan(value2) {
    if (value2 > 100) {
        return value2 + " is greater than 100";
    }
    return value2 + " is 100 or less than 100";
}
console.log(testGreaterThan(100));
console.log(testGreaterThan(101));

//Greater than or equal to operator(>=)
//Performs type conversion on the data types its comparing

function testGreaterThanOrEqualTo(val) {
    if (val >= 100) {
        return val + " is greater than 100 or is 100";
    }
    return val + " is not greater than or equal to 100";
}
console.log(testGreaterThanOrEqualTo(100));
console.log(testGreaterThanOrEqualTo(101));
console.log(testGreaterThanOrEqualTo(19));

//Less than operator(<)
//Does type conversion
function testLessThan(val) {
    if (val < 25) {
        return val + " is less than 25";
    }
    return val + " is 25 or greater than 25";
}
console.log(testLessThan(24));
console.log(testLessThan(25));

//Less than or equal to operator(<=)
//Does type conversion
function testLessOrEqual(val) {
    if (val <= 10) {
        return val + " is less than 10 or val is 10";
    }
    return val + " is greater than 10";
}
console.log(testLessOrEqual(10));
console.log(testLessOrEqual(11));

//Logical AND operator(&&)
//Only evaluates to true if both conditions being compared result to true

function testLogicalAnd(val) {
    if (val < 20 && val > 15) {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(10));
console.log(testLogicalAnd(16)); //evaluates to "yes" because 16 is both less than 20 and more than 15

//Logical OR operator(||)
//Returns true if only one of the conditions being tested is true

function testLogicalOr(val) {
    if (val > 5 || val < 15) {
        return "True";
    }
    return "False";
}
console.log(testLogicalOr(6));
console.log(testLogicalOr(1));

//If..Else statements
//The else statement stores a block of code to be executed when the if statement results to false

function testElse(val) {
    let result = " ";
    if (val < 5) {
        result = val + " is less than 5";
    } else {
        result = val + " is 5 or bigger than 5";
    }
    return result;
}
console.log(testElse(5));
console.log(testElse(4));



//Else...if statements
//Used if you have multiple conditions
//else..if statements are executed in order from top to bottom
//The first piece of code is what will be executed first
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "In between 5 and 10";
    }
}
console.log(testElseIf(11));
console.log(testElseIf(3));
console.log(testElseIf(7));

//Chained else...if statements
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}

console.log(testSize(7));
console.log(testSize(10));
console.log(testSize(1));
console.log(testSize(20));
console.log(testSize(19));



//SWITCH CASE
//Used when you have alot of options to choose from
function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;

        case 2:
            answer = "beta";
            break;

        case 3:
            answer = "gamma";
            break;

        case 4:
            answer = "delta"
            break;
    }



    return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));


//In a SWITCH STATEMENT you can use "default" to specify what happens when a case isn't matched
//Think of it as the last else statement in an if...else statement
function switchOfStuff(val) {
    let answer = " ";

    switch (val) {
        case "a":
            answer = "apple";
            break;

        case "b":
            answer = "banana";
            break;

        case "c":
            answer = "cat";
            break;

        default:
            answer = "stuff";
            break;
    }
    return answer;
}
console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff(1));


//In a switch statement if theres no break then the cases will be executed continously until a break is met
//this can be put to use when you have more than one case with the same output
function sequentialSizes(val) {
    let answer = " ";

    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;

        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;

        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(1));
console.log(sequentialSizes(5));
console.log(sequentialSizes(7));


function chainToSwitch(val) {
    let answer = " ";

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;

        case 1:
            answer = "There is no #1";
            break;

        case 99:
            answer = "Missed me by this much!";
            break;

        case 7:
            answer = "Ate Nine";
            break;
    }

    return answer;
}
console.log(chainToSwitch("bob"));
console.log(chainToSwitch(42));
console.log(chainToSwitch(1));
console.log(chainToSwitch(99));
console.log(chainToSwitch(7));



//Returning boolean values from fucntions
//Will makes use of comparison operators because they return either true or false(boolean)
function itsEqual(a, b) {
    return a === b;
}
console.log(itsEqual(10, 10));
console.log(itsEqual(10, 14));


//Return early pattern for functions
//When a return statement is met the function will stop executing immediately and go back to the 
//..calling location
function myFunc() {
    console.log("Hello");
    return "World";
    console.log("byebye"); //this one is never executed because it comes after a return statement
}
console.log(myFunc());



//OBJECTS

//Useful for storing data in a structured way
//You access data in objects using properties

//eg
const cat = {
    name: "Whiskers",
    legs: 4,
    tails: 1,
    enemies: ["Water", "Dogs"]
};



//Accessing objects properties with dot notation
//There are two ways
//(a): using a dot notation( . )
//(b): using a bracket notation( [] )
//dot notation is used when you already know the name of the property you are trying to access

//eg
const myObj = {
    prop1: "value1",
    prop2: "value2"
};
const propval1 = myObj.prop1;
const propval2 = myObj.prop2;

console.log(propval1);
console.log(propval2);


//Bracket notation is used when the name of a property has a space in it
//however you can still use it on properties that dont have spaces in them
const thisObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    NoSpace: "USS Enterprise"
};
console.log(thisObj["More Space"]);
console.log(thisObj["Space Name"]);



//Accessing object properties with variables
//Done using the bracket notation
//This can be useful when iterating through an object's properties or when accessing a lookup table
const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};
const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);



//Updating object properties
//You can use either bracket or dot notation
const ourDog = {
    name: "Camper",
    legs: 4,
    tails: 1,
    friends: ["everything"]
};
console.log(ourDog); //shows the name before the update

ourDog.name = "Happy Camper"
console.log(ourDog); //shows the name after the update



//Adding new properties to an object
//Done the same way we update properties

//adding a bark property to "ourDog" object
ourDog.bark = "woof-woof";
console.log(ourDog);



//Deleting properties from an object
//We use the "delete" keyword before specifying which property is being removed

//Removing the "tails" property from "ourDog" object
console.log(ourDog); //shows "ourDog" before removing tails

delete ourDog.tails;
console.log(ourDog); //shows tails property has been removed



//Using objects for lookups
//Objects can be thought of as a key/value storage
function phoneticLookup(val) {
    let result = " ";

    let lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("charlie"));
console.log(phoneticLookup("echo"));



//Testing objects for properties
//We use the ".hasOwnProperty(name)" method
//It returns true if the property is found in the object

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}
console.log(checkObj({
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}, "gift"));

console.log(checkObj({
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}, "district"));



//Manipulating complex objects
//An object is one way to handle flexible data structures

//eg
//Here you''ll need to place a comma after every object unless its the last object in the array
const myMusic = [
    {
        artist: "Billy Joel",
        title: "Piano Man",
        release_year: 1973,
        formats: [
            "Cd",
            "Lp",
            "8t"
        ],
        gold: "true"
    },

    {
        artist: "The Weeknd",
        title: "Starboy",
        release_year: 2016,
        formats: [
            "Cd",
            "Vinyl",
            "Digital"
        ],
        gold: "true"
    }
];



//Accessing nested objects
//Can be done by chaining together the dot and bracket notation

const myStorage = {
    car: {
        inside: {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        outside: {
            trunk: "jack"
        }
    }
};

//accessing the contents of "glove box"
const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);



//Accessing nested arrays
//Also done by chaining dot and bracket notations

const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },

    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

//accessing the second tree from "myPlants"
const secondTree = myPlants[1].list[1];
console.log(secondTree);



//LOOPS

//While loops
//here code runs while a specific condition is true and stops when it evaluates to false

const whileLoop = [];
let i = 0;

while (i < 5) {
    whileLoop.push(i);
    i++;
}
console.log(whileLoop);


const thisLoop = [];
let a = 5;

while (a >= 0) {
    thisLoop.push(a);
    a--;
}
console.log(thisLoop);



//For Loops
//declared with 3 optional expressions that are seperated by semicolons

//SYNTAX:  for(a; b; c){
//code to be executed
//}

//a -> the initialization statement (executed one time only before the loop starts)
//b -> the condition statement (evaluated at the beginning of every loop iteration) (continues as long as true)
//c -> the final expression (executed at the end of each iteration) (used to increment or decrement the loop counter)

const forLoop = [];

for (let i = 0; i < 5; i++) {
    forLoop.push(i);
}
console.log(forLoop);

//for loops dont need to iterate one at a time
//eg when counting even and odd numbers

//count even numbers between 0 and 10
const evenNo = [];

for (let i = 0; i < 10; i += 2) {
    evenNo.push(i);
}
console.log(evenNo);


//count odd numbers between 0 and 10
const oddNo = [];

for (let i = 1; i < 10; i += 2) {
    oddNo.push(i);
}
console.log(oddNo);



//Iterating through an array using a for loop
const arr = [10, 9, 8, 7, 6,];

for (let i = 0; i < arr.length; i++) { // .length is used to get the length of the array
    console.log(arr[i]);
}



//Nesting for loops
//used when you have a multi-dimensional array

const twoArray = [
    [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < twoArray.length; i++) {
    for (let j = 0; j < twoArray[i].length; j++) {
        console.log(twoArray[i][j]);
    }
}


function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));



//Iterate with Do...While Loops
//this loop will first do/execute the code once inside the loop no matter what
//then it will continue to run the loop while the condition is true

const doLoop = [];
let r = 3;

do {
    doLoop.push(r);
    r++
} while (r <= 10);

console.log(doLoop);



//replace loops using recursion
//Recursion => concept that a function can be expressed in terms of itself (a function that calls itself)
function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}
// here (n <= 0) is the base case
//recursive functions need a base case so that they stop executing..otherwise it would be infinite
// arr here is an array and n is the number of elements we want to work on

console.log(multiply([2, 3, 4], 2));
//here the program takes arr[2,3,4] and its working on the first n elements(2)



//Generation random fractions on JavaScript
//we use the Math.random() funciton
//It generates a random decimal between 0(inclusive) and 1(exclusive)
//Meaning Math.random() can return 0 but not 1

function randomFraction() {
    return Math.random();
}
console.log(randomFraction());



//Generating random whole numbers on JavaScript
//We use the Math.random() function but multiply by a whole number
//We then use the Math.floor() function to round down this number to the nearest whole number

//Eg generating a random whole number between 0-19
function getWholeNum() {
    return Math.floor(Math.random() * 20);
    //even though we are getting a number between 0-19 we multiply
    //by 20 because Math.random() cannot return 1.

}
console.log(getWholeNum());

//generate a random number betwen 0-9
function randomWholeNo() {
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNo());



//Generate random whole numbers within a range
//For this you have to define a min and a max number
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    //Here the number will be more than or equal to your min and less than or equal to your max
}
console.log(randomRange(20, 30));

function randomRange2(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    //Number returned will be more than or equal to your min and less than (and not equal) your max
}
console.log(randomRange2(40, 100));



//Using parseInt() function
//This function parses a string and returns an integer
//if the first character in the string can't be converted then it return NaN

//Eg
const testInt = parseInt("007");
console.log(testInt);

function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("56"));
console.log(convertToInteger("James"));



//Using the parseInt() function with a Radix
//parseInt() parses a string and returns an integer
//here it takes another argument, radix
//the radix specifies the base of the number in the string
//radix can be an integer between 2 and 36

//eg
const testRadix = parseInt("11", 2);
console.log(testRadix);

function convertToInteger2(str) {
    return parseInt(str, 2);
}
console.log(convertToInteger2("10011"));



//Using the ternary operator
//can be used as a one-line if...else operator
//Syntax => a ? b : c
//a is the condition
//b is the code that runs when the condition is true
//c is the code that runs when the condition is false

//eg: how an if...else statement is re-written using ternary operator
//if...else code
function findGreater(a, b) {
    if (a > b) {
        return "a is greater";
    } else {
        return "b is greater";
    }
}
console.log(findGreater(10, 25));

//ternary operator code
function getGreater(a, b) {
    return a > b ? "a is greater" : "b is greater";
}
console.log(getGreater(20, 25));



//Using multiple ternary operators
//Instead of using an if...else statement

function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal"
        : (a > b) ? "a is greater"
            : "b is greater";
}
console.log(findGreaterOrEqual(10, 7));

//check if a number is positive, negative or zero. The function should return positive, negative or zero.
function checkSign(num) {
    return (num > 0) ? "positive"
        : (num < 0) ? "negative"
            : "zero"
}
console.log(checkSign(10));
console.log(checkSign(0));
console.log(checkSign(-2));



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