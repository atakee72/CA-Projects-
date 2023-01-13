import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import Cards from './components/Cards';
import Searchbar from './components/Searchbar';

function App() {

  const [characters, setCharacters] = useState([]);
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {

    const getCharacters = async () => {
      try {
          const response = await fetch('https://rickandmortyapi.com/api/character');
          const jsonFile = await response.json();
          console.log('Result of try :>> ', jsonFile);
          const data = jsonFile.results;
          console.log('Data', data[0]);
          setCharacters(data)
          } catch(error) {
          console.log('Error', error); 
          }      
    }
    getCharacters();
    }, []);

    console.log('CHARACTERS', characters)
   const getInput = (input)=> {
    console.log('user input :>> ', input);
    setInputValue(input)
   }

  useEffect(() => {
  filterCharacters()
  }, [inputValue])

   const filterCharacters = ()=> {
    const filteredCharacters = characters.filter((character)=> { 
      return character.name.toUpperCase().includes(inputValue.toUpperCase())})
      console.log('filteredCharacters :>> ', filteredCharacters);
   }
   filterCharacters();

//    if (filteredCharacters.length != 0) {
//     characters = filteredCharacters;
//  }
  return (
    <div className="App flex-container">
      <header className="App-header">
        <p>
          Rick And Morty
        </p>
       
      </header>
      
        <Searchbar getInput={getInput} />
        <Cards characters = {characters}/>

    </div>
  );
}

export default App;
