function getData () {
    fetch(url)
    .then((response) => {
    console.log('response :>> ', response);
    return response.json;
    }) 
    .then ((jsonFile) => {
    console.log('result :>> ', jsonFile);
    })
    .catch((err) => {
        alert(err);
    })
};