const getData = () => {
    fetch("https://www.fishwatch.gov/api/species")
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((jsonFile) => {
            console.log("result", jsonFile); 
            const fish_species = jsonFile;
            // console.log(fish_species[0]);

            controller(fish_species);
            addEvents();
        })
        .catch((error) => {
            alert(error);
        });
};

const createCards = (fish_species) => {
    
    const cardsContainer = document.getElementById("cards-container");
     cardsContainer.innerHTML = "";
    let isTextHidden = true;


     for (let i = 0; i < fish_species.length; i++) {
        const theCard = document.createElement("div");
        theCard.setAttribute("class", "card ms-1 col-sm-1 col-md-2 col-lg-4 border-light rounded-3 border border-3 p-3 mb-5 rounded");
    
        const cardImg = document.createElement("img");
        cardImg.setAttribute("class", "card-img-top img-fluid")
        cardImg.setAttribute("src", fish_species[i]["Species Illustration Photo"].src);
     
        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-Body")
    
        const h5_title = document.createElement("h5");
        h5_title.setAttribute("class", "text-center card-title pt-1 top");
        h5_title.innerText = fish_species[i]["Species Name"];
    
        const p_title = document.createElement("p");
        p_title.setAttribute("class", "text-center pt-4 top");
        p_title.innerText = "(" + fish_species[i]["Scientific Name"] + ")";
    
        theCard.addEventListener("click", clickCard);
        
        function clickCard() {
            isTextHidden = !isTextHidden;
            showText();
        }

        function showText() {
            if (isTextHidden === false) {
                // button.innerText = ("Hide");
                toggleText.setAttribute("class", "mw-auto")
                // toggleText.setAttribute("style", "overflow-y: scroll");
                biology.innerHTML = "<em>Biology: </em>" + fish_species[i].Biology;
                location.innerHTML = "<em>Location: </em>" + fish_species[i].Location;
                physical.innerHTML = "<em>Physical Description: </em>" + fish_species[i]["Physical Description"];
                texture.innerHTML = "<em>Texture: </em>" + fish_species[i].Texture;
                benefits.innerHTML = fish_species[i]["Health Benefits"];
            } else {
                // button.innerText = ("Show");
                biology.innerHTML = "";
                location.innerHTML = "";
                physical.innerHTML = "";
                texture.innerHTML = "";
                benefits.innerHTML = "";
            }
        }
        
        const toggleText = document.createElement("div");
        toggleText.setAttribute("class", "toggleT");
      
        const biology = document.createElement("p");
        biology.innerHTML = "";
    
        const location = document.createElement("p");
        location.innerHTML = "";
    
        const physical = document.createElement("p");
        physical.innerHTML = "";
    
        const texture = document.createElement("p");
        texture.innerHTML = ""; 
    
        const benefits = document.createElement("p");
        benefits.classList.add("card-text");
        benefits.innerHTML = "";
          
        cardsContainer.appendChild(theCard);
        theCard.appendChild(cardImg);
        theCard.appendChild(cardBody);  
        cardBody.appendChild(h5_title);
        cardBody.appendChild(p_title);
        cardBody.appendChild(toggleText);
        toggleText.appendChild(location);
        toggleText.appendChild(physical);
        toggleText.appendChild(biology);
        toggleText.appendChild(texture);
        toggleText.appendChild(benefits);   
    }
    
}

const createDropdown = (fish_species) => {
    const dropdown = document.getElementById("dropdown");

    const regions = fish_species.map((eachSpecies) => {
        return eachSpecies["NOAA Fisheries Region"];
    });

    const uniqueRegions = new Set(regions);
    console.log(uniqueRegions);

    uniqueRegions.forEach((eachUniqueReg) => {
        const option = document.createElement("option");
        option.innerText = eachUniqueReg;
        option.value = eachUniqueReg;
        dropdown.appendChild(option);
    });
}

function controller(fish_species) {

    createCards(fish_species);
    createDropdown(fish_species);
    setEventListeners(fish_species);
    addEvents(fish_species);
}
const setEventListeners = (fish_species) => {
    const dropSelector = document.querySelector("#dropdown");
    dropSelector.addEventListener("change", (event) => {
       
        filterByDropdown(fish_species);
    })
}

const filterByDropdown = (fish_species) => {
    const dropdownValue = document.getElementById("dropdown").value;
    const filteredByRegion = fish_species.filter((eachSpecies) => {
        return eachSpecies["NOAA Fisheries Region"] === dropdownValue || dropdownValue === "all";
    });
    
    createCards(filteredByRegion);
    addEvents(filteredByRegion);
}


const addEvents = (fish_species) => {
    const searchBar = document.getElementById("fish_search");
    searchBar.addEventListener("input", (event) => {
        fishArt = event.target.value;
        console.log(fishArt);
        console.log(event);

        // const resultBox = document.querySelector(".resultBox");
        // const resultList = resultBox.querySelector(".resultList");
        // let generateSuggestions = fish_species.filter((eachSpecies) => {
        //     return eachSpecies["Species Name"].toLowerCase().includes(fishArt.toLowerCase());
        //     });
        // const createSuggList = generateSuggestions.forEach((eachSuggestion) => {
        //     const listItem = document.createElement("li");
        //     resultList.appendChild(listItem);
        //     listItem.innerHTML = generateSuggestions;
        // });


            searchBar.addEventListener("keyup", (event) => {
            // console.log(event);
                if (event.key === "Enter") {
                    const filteredByName = fish_species.filter((eachSpecies) => {
                    return eachSpecies["Species Name"].toLowerCase().includes(fishArt.toLowerCase());
                    });  
                    createCards(filteredByName);        
                }
            });
    });
}

getData();

// const clickedTheCardContainer = () => {
//     const theCardContainer = document.querySelector(".cards-container");
//     const togglyText = document.querySelector(".toggleT");
//     theCardContainer.addEventListener("click", () =>{
//     togglyText.style.display = "none";
//     });
// };