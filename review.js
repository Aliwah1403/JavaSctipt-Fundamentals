const thisName = "Brian";
var thatName = "Daniel";
let fullName = thisName + " " + thatName;
console.log(fullName);

let lastNameLenght = 0;
let lastName = "Alphonso"
lastNameLenght = lastName.length;
console.log(lastNameLenght);

let name1 = "Odhiambo"
let letterIndex = " ";
letterIndex = name1[4];
console.log(letterIndex);
let lastLetter = name1[name1.length - 1];
console.log(lastLetter);


const thisArray = [34, 54, 23];
const sentence = "The largest number is " + thisArray[thisArray.length - 2];
console.log(sentence);


const myArray2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const thisData = myArray2[1][2];
console.log(thisData);

let footballer = [
    ["Cristiano", 7],
    ["Messi", 10]
];

const goatBall = footballer[0][0];
console.log(goatBall);

let goatBallSen = "The two best footballers are " + footballer[0][0] + " and " + footballer[1][0];
console.log(goatBallSen);

footballer.push(["Neymar", 11]);
console.log(footballer);

let removedBaller = " ";
removedBaller = footballer.pop();
console.log(removedBaller);

let petArray = ["cat", "dog", "bird"];
petArray.shift();
console.log(petArray);


function nameFunciton() {
    let firstName = "Curtis";
    let lastName = "Aliwah";
    let fullName = firstName + " " + lastName;
    return fullName;
}
console.log(nameFunciton());

function withArgs(num1, num2) {
    return num1 + num2;
}
console.log(withArgs(2, 3));


function yesEqual(myVal) {
    if (myVal == 10) {
        return "It is equal";
    }
    return "It is not equal";
}
console.log(yesEqual(10));
console.log(yesEqual("10"));
console.log(yesEqual(9));

function strictEqual(myVal) {
    if (myVal === 12) {
        return "It is equal";
    }
    return "Not equal";
}
console.log(strictEqual(12));
console.log(strictEqual("12"));


function testIf(val) {
    if (val > 5) {
        return "This number is larger than 5";
    } else if (val < 5) {
        return "This number is not larger than 5";
    } else {
        return "Number entered is 5";
    }
}
console.log(testIf(4));
console.log(testIf(6));
console.log(testIf(5));


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
console.log(testSize(3));
console.log(testSize(12));
console.log(testSize(18));
console.log(testSize(40));


function caseInSwitch(val) {
    let result = " ";
    switch (val) {
        case 1:
            result = "alpha";
            break;

        case 2:
            result = "beta";
            break;

        case 3:
        case 4:
        case 5:
            result = "gamma";
            break;

        default:
            result = "No match";
            break;
    }
    return result;
}
console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));
console.log(caseInSwitch("s"));


const dog = {
    name: "TJ",
    legs: 4,
    color: "white and black"
};

const dogName = dog.name;
console.log(dogName);

const cats = {
    Casper: "Turkish Angora",
    Flavio: "American Shorthair",
    Milo: "American Shorthair"
};
const myCat = "Casper";
const myBreed = cats[myCat];
console.log(myBreed);

cats.Luna = "American Shorthair";
console.log(cats);

delete cats.Luna;
console.log(cats);

console.log(cats.hasOwnProperty("Flavio"));

const myStorage = {
    car: {
        inside: {
            "glove box": "maps"
        }
    }
};
const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);
myStorage.car.inside["driver seat"] = "steering";
console.log(myStorage.car.inside);


const thisPlants = [
    {
        type: "flowers",
        list: [
            "roses",
            "tulips",
            "violets"
        ]
    },

    {
        type: "trees",
        list: [
            "fir",
            "oak",
            "mahogany"
        ]
    }
];
const onePlant = thisPlants[0].list[1];
console.log(onePlant);
const oneTree = thisPlants[1].list[2];
console.log(oneTree);


const whileLoop = [];
let a = 0;
while (a < 5) {
    whileLoop.push(a);
    a++;
}
console.log(whileLoop);

const noCount = [];
let b = 5;
while (b >= 0) {
    noCount.push(b);
    b--;
}
console.log(noCount);

const evenNo = [];
let c = 0;
while (c < 10) {
    evenNo.push(c);
    c += 2;
}
console.log(evenNo);

const oddNo = [];
let d = 1;
while (d < 10) {
    oddNo.push(d);
    d += 2;
}
console.log(oddNo);


const forLoop = [];
for (let e = 0; e < 5; e++) {
    forLoop.push(e);
}
console.log(forLoop);

const arr = [1, 2, 3, 4, 5, 6, 7];
for (let f = 0; f < arr.length; f++) {
    console.log(arr[f]);
}

const twoArray = [
    [1, 2], [3, 4], [5, 6]
];
for (let g = 0; g < twoArray.length; g++) {
    for (let h = 0; h < twoArray[g].length; h++) {
        console.log(twoArray[g][h]);
    }
}

const doLoop = [];
let i = 3;
do {
    doLoop.push(i);
    i++;
} while (i <= 10);
console.log(doLoop);


function randomFraction() {
    return Math.random();
}
console.log(randomFraction());

function wholeNumber() {
    return Math.floor(Math.random() * 21);
}
console.log(wholeNumber());


function randomRange(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomRange(10, 1));
console.log(randomRange(100, 5));


// try make a functionb that returns a 4 digit OTP


const testInt = parseInt("007");
console.log(testInt);

function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("56"));
console.log(convertToInteger("JAMES"));

const testInt2 = parseInt("10021", 16);
console.log(testInt2);

function getTheGreatest(a, b) {
    return a > b ? "a is greater" : "b is greater";
}
console.log(getTheGreatest(13, 34));

function checkNumber(val){
    return (val > 0) ? "Positive"
    : (val < 0) ? "Negative"
    :"Zero"
}
console.log(checkNumber(1));
console.log(checkNumber(-2));
console.log(checkNumber(0));