//EXERCISE 17:

function listTheBands(arr){

    const UlList = document.getElementById('bandList');
     
    for (i = 0; i < arr.length; i++){
        const newLi = document.createElement('li');
        UlList.appendChild(newLi);
        newLi.textContent = arr[i];
    }
}

let theBands = ['Dire Straits', 'Kansas', 'Steely Dan', 'sdfasdf', 'sdfsadfsdfasd', 'rtrtuerytur'];
listTheBands(theBands);
