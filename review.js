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

let goatBallSen = "The two best footballers are "+footballer[0][0]+" and "+footballer[1][0];
console.log(goatBallSen);