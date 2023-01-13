import React from 'react'
import NewChild from './NewChild'

function Student({elephant}) {           //instead of props, destructured {elephant} can be used
  return (
    <div><div> {elephant} </div>
    <NewChild name={elephant} text={"asdfasdf"}/>
    </div>
  )
}

export default Student