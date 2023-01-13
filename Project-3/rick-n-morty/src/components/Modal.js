import React from "react";
import { useEffect, useState } from "react";
import "../styles/modal.css";


const Modal = ({character, model2Show}) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    
    if (model2Show === character.id) {
      setShow(true)
    }
    
  }, [model2Show])
  
  function handleModClose() {
    setShow(false)
  }

  {if (show === false) {
    return null
  } else {
  return (
    <div className="modal">
      <div className="modal-content">
          <div className="modal-header">
              <h4 className="modal-title">Modal Title {character.name}</h4>
          </div>
          <div className="modal-body">
            
            <img src={character.image} alt={character.id}/><br />
            <b>Species:</b> {character.species}<br />
            <b>Status:</b> {character.status}
          </div>
          <div className="modal-footer">
            <button className="button" onClick={handleModClose}>Close</button>
          </div>
        </div>
      </div>
    )}
}
}

export default Modal