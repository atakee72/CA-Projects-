//EXERCISE 19:

function iReturnNothing(){
    
    console.log(3 * 4);
}

iReturnNothing();


//EXERCISE 20:

function iReturnSomething(){
    
    return 3 * 4;
    
}

console.log(iReturnSomething());







//EXERCISE 23:

function replaceAsWith1s(str){

 //   console.log(str);

    let arr = str.split('');

//    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'a' || arr[i] == 'A'){
            arr[i] = '1';
        }          
    }
 //   console.log(arr);

    str = arr.join('');
    console.log(str);
}

let myStr = "Anna Karanina"
replaceAsWith1s(myStr);

//THEEND