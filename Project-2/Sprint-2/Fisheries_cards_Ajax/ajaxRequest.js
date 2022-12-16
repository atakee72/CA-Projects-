const url = "https://www.fishwatch.gov/api/species";

fetch(url).then((response)=>{
    return response.json();
}).then((result)=>{
    // let example = result.response[0].title
}).catch((error)=>{
    console.log(error);
})
