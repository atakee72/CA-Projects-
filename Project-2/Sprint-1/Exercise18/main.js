//EXERCISE 18:

function addMultTable(rows, cols){

    const table = document.getElementById('whereTheTableDwells');

    for (i = 1; i <= rows; i++)
    {
        const newRow = document.createElement('tr');

        for (j = 1; j <= cols; j++)
        {
            const newCol = document.createElement('td');
            newCol.textContent = ('row ' + [i] + ', column ' + [j]);
            newRow.appendChild(newCol);
            
        }   
        table.appendChild(newRow); 
              
    }

    table.setAttribute("border", "2",);
    
}
            
addMultTable(2, 3);
