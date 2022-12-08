/*console.log(fish_species[10]);

console.log(fish_species[10]["Scientific Name"]);

console.log(fish_species.length);

console.log(fish_species[10].Quote);
console.log(fish_species[10].Population);
console.log(fish_species[10].Location);
console.log(fish_species[10]["Image Gallery"][0]);
console.log(fish_species[10]["Health Benefits"]);
console.log(fish_species[10]["Harvest Type"]);*/

const tBody = document.getElementById("tBody");
// const tHeads = ['Nr.', 'Name', 'Scientific Name', 'Short Info', 'Color', 'Location', 'Population', 'Harvest Type', 'Health Benefits', 'Sample Image'];

// console.log(tHeads);

for (let i = 0; i < fish_species.length; i++) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = (i + 1);

    let td2 = document.createElement("td");
    td2.innerText = fish_species[i]["Species Name"];

    let td3 = document.createElement("td");
    td3.innerText = fish_species[i]["Scientific Name"]; 

    let td4 = document.createElement("td");
    td4.innerText = fish_species[i].Quote;

    let td5 = document.createElement("td");
    td5.innerText = fish_species[i].Color;

    let td10 = document.createElement("td");
    td10.innerText = fish_species[i]["Species Illustration Photo"];

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    tBody.appendChild(tr);
    }


