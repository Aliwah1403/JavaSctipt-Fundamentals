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


function nameFunciton(){
    let firstName = "Curtis";
    let lastName = "Aliwah";
    let fullName = firstName + " "+ lastName;
    return fullName;
}
console.log(nameFunciton());

function withArgs(num1, num2){
    return num1 + num2;
}
console.log(withArgs(2,3));


function yesEqual(myVal){
    if(myVal == 10){
        return "It is equal";
    }
    return "It is not equal";
}
console.log(yesEqual(10));
console.log(yesEqual("10"));
console.log(yesEqual(9));

function strictEqual(myVal){
    if(myVal === 12){
        return "It is equal";
    }
    return "Not equal";
}
console.log(strictEqual(12));
console.log(strictEqual("12"));


function testIf(val){
    if(val > 5){
        return "This number is larger than 5";
    }else if(val < 5){
        return "This number is not larger than 5";
    }else{
        return "Number entered is 5";
    }
}
console.log(testIf(4));
console.log(testIf(6));
console.log(testIf(5));