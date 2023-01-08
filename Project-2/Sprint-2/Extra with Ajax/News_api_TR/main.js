const getData = () => {
    fetch("https://newsapi.org/v2/top-headlines?country=tr&apiKey=98134c946b3d44b3a0b42f72200197b6")
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((jsonFile) => {
            console.log("result", jsonFile);

            const articles = jsonFile.articles
            console.log(articles[0].author);

            createCard(articles);
        })
        .catch((error) => {
            alert(error);
    });
};

function createCard(articles) {
    const cardDeck = document.getElementById("card-deck");

    for (let i = 0; i < articles.length; i++) {
        const card = document.createElement("div");
        card.setAttribute("class", "card ms-1 col-lg-3 shadow bg-warning rounded-3 border border-3 p-3 mb-5 rounded");

        const cardImg = document.createElement("img");
        cardImg.setAttribute("class", "card-img-top img-fluid mt-2 mb-3");
        cardImg.setAttribute("src", articles[i].urlToImage);

        const cardText = document.createElement("p");
        cardText.setAttribute("class", "card-text");
        cardText.innerHTML = (articles[i].description);

        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-Body");

        const h5_title = document.createElement("h5");
        h5_title.setAttribute("class", "text-center card-title p-2");
        h5_title.innerText = articles[i].title;

        const linkButton = document.createElement("button");
        const buttonLink = document.createElement("a");
        buttonLink.setAttribute("href", articles[i].url);
        buttonLink.setAttribute("target", "_blank");
        buttonLink.setAttribute("class", "m-3");
        linkButton.setAttribute("class", "btn btn-outline shadow m-3")
        linkButton.innerText = "Devamını oku";

        const badge = document.createElement("button");
        badge.innerText = articles[i].author;
        badge.setAttribute("class", "btn btn-outline mb-3 badge shadow p-2");

        const published = document.createElement("p");
        published.innerHTML = articles[i].publishedAt;
        badge.setAttribute("class", "mb-3 badge shadow p-2");


        cardDeck.appendChild(card);
        card.appendChild(badge);
        card.appendChild(published);
        card.appendChild(cardImg);
        card.appendChild(cardBody);
        cardBody.appendChild(h5_title);
        cardBody.appendChild(cardText);
        buttonLink.appendChild(linkButton);
        card.appendChild(buttonLink);

        
    }
}

getData();