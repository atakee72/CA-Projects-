// const url = "https://api.chucknorris.io/jokes/random";

const getData = () => {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((jsonFile) => {
            console.log("result", jsonFile);
            let wisdom = jsonFile;
            console.log(wisdom.value);

            createCard(wisdom);
            // controller(wisdom);
        })
        .catch((error) => {
            alert(error);
    });
};

function createCard(wisdom) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    cardContainer.innerHTML = wisdom.value;
}

getData();