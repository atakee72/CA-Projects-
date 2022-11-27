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

//added this while on new_branch




