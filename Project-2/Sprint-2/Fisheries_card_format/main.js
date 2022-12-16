const cardsContainer = document.getElementById("cards-container");
cardsContainer.setAttribute("class", "d-flex flex-row justify-content-around flex-wrap")

let isTextHidden = true;

for (let i = 0; i < fish_species.length; i++) {
    const theCard = document.createElement("div");
    theCard.setAttribute("class", "card 3mt-1 ms-1 mt-1 text-black col-sm-1 col-md-2 col-lg-3 bg-light border-blue");

    const cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top p-3 w-auto img-fluid mx-auto")
    cardImg.setAttribute("src", fish_species[i]["Species Illustration Photo"].src);
    cardImg.setAttribute("alt", "Picture of the fish in question");
 
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-Body")

    const h5_title = document.createElement("h5");
    h5_title.setAttribute("class", "text-center card-title pt-1");
    h5_title.innerText = fish_species[i]["Species Name"];

    const p_title = document.createElement("p");
    p_title.setAttribute("class", "text-center pt-4");
    p_title.innerText = "(" + fish_species[i]["Scientific Name"] + ")";

    const button = document.createElement("button");
    button.innerText = ("Show");
    button.setAttribute("class", "m-3 btn btn-sm btn-info");
    button.addEventListener("click", clickButton);

    const toggleText = document.createElement("div");
    toggleText.setAttribute("class", "px-4");
  
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
    cardBody.appendChild(button);
    cardBody.appendChild(toggleText);
    toggleText.appendChild(location);
    toggleText.appendChild(physical);
    toggleText.appendChild(biology);
    toggleText.appendChild(texture);
    toggleText.appendChild(benefits);

    function clickButton() {
        isTextHidden = !isTextHidden;
        if (isTextHidden === false) {
            button.innerText = ("Hide");
            toggleText.setAttribute("class", "h-50 mw-auto")
            toggleText.setAttribute("style", "overflow-y: scroll");
            biology.innerHTML = "<span>Biology: </span>" + fish_species[i].Biology;
            location.innerHTML = "<span>Location: </span>" + fish_species[i].Location;
            physical.innerHTML = "<span>Physical Description: </span>" + fish_species[i]["Physical Description"];
            texture.innerHTML = "<span>Texture: </span>" + fish_species[i].Texture;
            benefits.innerHTML = fish_species[i]["Health Benefits"];
        } else {
            button.innerText = ("Show");
            biology.innerHTML = "";
            location.innerHTML = "";
            physical.innerHTML = "";
            texture.innerHTML = "";
            benefits.innerHTML = "";
        }
    }

    // function showText() {
    //     if (isTextHidden === false) {
    //         button.innerText = ("Hide");
    //         toggleText.setAttribute("class", "h-50 mw-auto")
    //         toggleText.setAttribute("style", "overflow-y: scroll");
    //         biology.innerHTML = "<span>Biology: </span>" + fish_species[i].Biology;
    //         location.innerHTML = "<span>Location: </span>" + fish_species[i].Location;
    //         physical.innerHTML = "<span>Physical Description: </span>" + fish_species[i]["Physical Description"];
    //         texture.innerHTML = "<span>Texture: </span>" + fish_species[i].Texture;
    //         benefits.innerHTML = fish_species[i]["Health Benefits"];
    //     } else {
    //         button.innerText = ("Show");
    //         biology.innerHTML = "";
    //         location.innerHTML = "";
    //         physical.innerHTML = "";
    //         texture.innerHTML = "";
    //         benefits.innerHTML = "";
    //     }
    // }

}