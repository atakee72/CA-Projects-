let params = (new URL(document.location)).searchParams;
console.log("🚀 ~ params:", params);

let email = params.get("email");
console.log("🚀 ~ email:", email);
const emailPlace = document.querySelector(".email")
emailPlace.innerHTML = email

let fname = params.get("fname");
console.log("🚀 ~ fname:", fname);
const fnamePlace = document.querySelector(".fname")
fnamePlace.innerHTML = fname

let sname = params.get("sname");
console.log("🚀 ~ sname:", sname);
const snamePlace = document.querySelector(".sname")
snamePlace.innerHTML = sname

let bday = params.get("bday");
console.log("🚀 ~ bday:", bday);
const bdayPlace = document.querySelector(".bday")
bdayPlace.innerHTML = `born on ${bday}`

let sex = params.get("sex");
console.log("🚀 ~ sex:", sex);
const sexPlace = document.querySelector(".sex")
sexPlace.innerHTML = sex

let travellerType = params.get("travellerType");
console.log("🚀 ~ travellerType:", travellerType);
const travellerTypePlace = document.querySelector(".type")
travellerTypePlace.innerHTML = travellerType

let textArea = params.get("textArea");
console.log("🚀 ~ textArea:", textArea);
const textAreaPlace = document.querySelector(".notes")
textAreaPlace.innerHTML = `His/her note: ${textArea}`

let checkBox = params.get("treatment");
console.log("🚀 ~ checkBox:", checkBox);
const checkboxPlace = document.querySelector(".treatment")
checkboxPlace.innerHTML = checkBox



// let age = parseInt(params.get("age")); // is the number 18
// console.log("🚀 ~ age:", age);



