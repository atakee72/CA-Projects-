const cardsContainer = document.getElementById("cards-container");
cardsContainer.setAttribute("class", "d-flex flex-row justify-content-around flex-wrap")

for (let i = 0; i < fish_species.length; i++) {
    const theCard = document.createElement("div");
    theCard.setAttribute("class", "card  p-3 mt-1 ms-1 text-blue col-sm-1 col-md-2 col-lg-3 bg-light border-blue h-50");

//  d-inline-block

//  bg-light changes the background to light coloured...

    const cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top h-50 w-auto img-fluid mx-auto d-block pt-1")
//  sticky-top class make it stick to top
    cardImg.setAttribute("src", fish_species[i]["Species Illustration Photo"].src);
    cardImg.setAttribute("alt", "Picture of the fish in question");
 
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class" , "card-Body")
    cardBody.setAttribute("style", "overflow-y: scroll");

    const h5_title = document.createElement("h5");
    h5_title.setAttribute("class", "text-center card-title pt-4");
    h5_title.innerText = fish_species[i]["Species Name"];

    const p_title = document.createElement("p");
    p_title.setAttribute("class", "text-center pt-4");
    p_title.innerText = "(" + fish_species[i]["Scientific Name"] + ")";

    const biology = document.createElement("p");
    biology.innerHTML = "<span>Biology: </span>" + fish_species[i].Biology;

    const location = document.createElement("p");
    location.innerHTML = "<span>Location: </span>" + fish_species[i].Location;

    const physical = document.createElement("p");
    physical.innerHTML = "<span>Physical Description: </span>" + fish_species[i]["Physical Description"];

    const texture = document.createElement("p");
    texture.innerHTML = "<span>Texture: </span>" + fish_species[i].Texture;

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerHTML = fish_species[i]["Health Benefits"];
      
    cardsContainer.appendChild(theCard);
    theCard.appendChild(cardImg);
    theCard.appendChild(cardBody);  
    cardBody.appendChild(h5_title);
    cardBody.appendChild(p_title);
    cardBody.appendChild(location);
    cardBody.appendChild(physical);
    cardBody.appendChild(biology);
    cardBody.appendChild(texture);
    cardBody.appendChild(cardText);
}