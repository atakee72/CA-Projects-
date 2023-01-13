import React from 'react'

function NewChild({name, text}) { // if props, then props.name and props.text should be used..
  return (
    <div>NewChild
        <p>{name}</p>
        <p>{text}</p>
    </div>
  )
}

export default NewChild