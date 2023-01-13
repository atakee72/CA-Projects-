import React, { useState } from 'react'
import Modal from './Modal';

function Cards({characters}) {
  const [model2Show, setModel2Show] = useState(null)
  function handleModalClick(id) {
    setModel2Show(id)
  }

  return ( 
    <div>
      {characters && characters.map((character, i) => {
    return (
    <React.Fragment key={i}>
      <div className='flex-container'>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img className='image' src={character.image} alt={character.id}/>
            </div>
            <div class="flip-card-back">
              <h1>{character.name}<br /></h1>
              <p><b>Location:</b> <br /> {character.location.name}</p>
              <p><b>Origin: </b><br />{character.origin.name}</p>
              <button onClick={() => handleModalClick(character.id)}>LEARN MORE</button>
              {/* <Modal character={character} model2Show={model2Show} /> */}
            </div>
          </div>
        </div>
      </div>
      <Modal character={character} model2Show={model2Show} />
    </React.Fragment>
    );
  })
  }
    </div>
  )
 
}

export default Cards

