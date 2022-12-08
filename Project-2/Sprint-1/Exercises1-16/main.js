console.log("Starting JavaScript!")

//EXERCISE 1:

let myName = "Ercan";

console.log(myName);

//EXERCISE 2:

let age = 50;

console.log(age);

//EXERCISE 3:

let juliaAge = 32;

let ageDiff = age - juliaAge;

console.log(ageDiff);

//EXERCISE 4: (conditionals)

if (age > 21){
    console.log("You are older than 21.");
} else
console.log("You are not older than 21.");

//EXERCISE 5:

//age = 32;

if (age < juliaAge){
console.log("Julia is older than you.");
} else if (age > juliaAge){
console.log("Julia is younger than you.");
} else {
console.log("You have the same age as Julia.")};

//EXERCISE 6: (sorting arrays)

let namesArray = ["Ercan", "Santiago", "Olja", "Roxanne", "Can", "Raul", "Lucas", "Juli", "Monique"];

console.log(namesArray);                        //unsorted

console.log(namesArray.sort());                 //sorted alphabetically

console.log(namesArray);                        //it is still sorted: it's been sorted and remains so!

console.log(namesArray[0]);                     //First element of the sorted: Can

console.log(namesArray[8]);                     //Last element of the sorted: Santiago, index no. 8

for (i = 0; i < namesArray.length; i++) {       //for-looped list
    console.log(namesArray[i]);    
}

//EXERCISE 7: (looping over arrays)

let agesArray = [50, 33, 36, 33, 39, 45, 32, 28, 37];

i = 0;

while (i < agesArray.length){
    if (agesArray[i] % 2 == 0){
    console.log(agesArray[i]);}
    i++;
}

for (i = 0; i < agesArray.length; i++) {
    if (agesArray[i] % 2 == 0){
    console.log(agesArray[i]);}    
}

//EXERCISE 8:

function lowestArrayItem($array){

    let theSmallest = $array[0];

    for (i = 0; i < $array.length; i++) {

        if ($array[i] < theSmallest){
            theSmallest = $array[i];
        }        
    }
// console.log(theSmallest);
   return theSmallest;
}

let anArray = [123, 25345, 333, 2, -1, 6667, 546];

console.log(lowestArrayItem(anArray));

//EXERCISE 9:

function largestArrayItem($array){

    let theLargest = $array[0];

    for (i = 0; i < $array.length; i++) {

        if ($array[i] > theLargest){
            theLargest = $array[i];
        }        
    }
// console.log(theLargest);
   return theLargest;
}

let an_Array = [123, 2535545, 333, 2, -1, 6667, 546];

console.log(largestArrayItem(an_Array));

//EXERCISE 10:

function printOneElement(arr, i){
    console.log(arr[i]);
}

var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 
var index = 1;

printOneElement(array, index);


//EXERCISE 11:

function findDuplicates(arr){
  //  let i = 0;
  //  let j = i + 1;

    for (i = 0; i < arr.length; i++){
        for (j = i + 1; j < arr.length; j++){
            if (arr[i] === arr[j]){
            console.log(arr[i])
            }
        }
    }
}

var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

findDuplicates(array)

//EXERCISE 12: 

function makeAString(arr){
    
    let theString = "";

    for (i = 0; i < arr.length; i++){
        theString = theString + " " + arr[i]; 
    }
    console.log(theString);
}

myColor = ["Red", "Green", "White", "Black"];

makeAString(myColor);

//EXERCISE 13:

function ReverseTheNum(num){
   
    let reverseNum = 0;

    while (num > 0){
    lastDigit = num % 10;
    reverseNum = (reverseNum * 10) + lastDigit;
    num = Math.floor(num / 10);
    }
    return reverseNum;
}

var number = 123456789; 

console.log(ReverseTheNum(number));


//EXERCISE 14:

function splitNReverse(str){
    
    // first part: transform the string into an array of letters:

    let makeArr = [];     

    for (i = 0; i < str.length; i++){
        
        if (str[i] !== " " ){
            makeArr.push(str[i]);
        }
    }
   //console.log([resultArr]);    // just to check if it works for it to become an array..

   // second part: reverse this array and append its elements (letters) one by one to form a new string:

   let resultStr = "";
    for (i = (makeArr.length - 1); i >=0; i--){
        resultStr = resultStr + makeArr[i];
    }
    console.log(resultStr);
}

let string = "something";

splitNReverse(string);       // calling the function


//EXERCISE 15:

function makeUppercase(str){
    
    let makeArr = str.split(" ");
//    console.log(makeArr);
//    console.log(typeof makeArr);

    var result = " ";

    for (i = 0; i < makeArr.length; i++){

        makeArr[i] = makeArr[i][0].toUpperCase() + makeArr[i].substr(1); 
    }
   // console.log(makeArr);
    //console.log(typeof makeArr);

     for (i = 0; i < makeArr.length; i++){
        result += " " + makeArr[i];
     }

    console.log(result);
   // console.log(typeof result);
}

var mySentence = "manipulate the document structure is one of the most common things you'll want to do when writing web pages and apps.";

makeUppercase(mySentence);


// EXERCISE 16:

function findTheLongestWord(str){
    
    let makeArr = str.split(" ");
//    console.log(makeArr);
//    console.log(typeof makeArr);

    var theLongestIs = makeArr[0];

    for (i = 0; i < makeArr.length; i++){

        if (makeArr[i].length > theLongestIs.length){
            theLongestIs = makeArr[i];
        }
    }
    console.log(theLongestIs);
    console.log(typeof theLongestIs);
}
    
var thePhrase = "Web Development Tutorial";

findTheLongestWord(thePhrase);

// EPIC-2: DOM MANIPULATION:

//EXERCISE 17:

