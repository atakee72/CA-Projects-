//EXERCISE 17:

function listTheBands(arr){

    const UlList = document.getElementById('bandList');
     
    for (i = 0; i < arr.length; i++){
        const newLi = document.createElement('li');
        UlList.appendChild(newLi);
        newLi.textContent = arr[i];
    }
}

let theBands = ['Dire Straits', 'Kansas', 'Steely Dan', 'sdfasdf'];
listTheBands(theBands);


//EXERCISE 18:

function formATable(rows, cols){

    const table = document.getElementById('whereTheTableDwells');

    for (i = 1; i <= rows; i++){
        const newRow = document.createElement('tr');
        table.appendChild(newRow);

            for (j = 1; j <= cols; j++){
                const newCol = document.createElement('th');
                .appendChild(newCol)
            }
    }
            

}