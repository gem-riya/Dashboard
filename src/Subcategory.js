import React from 'react'

function Subcategory({myList}) {
  const listItems = myList.map((myList)=>{   
    return <li>{myList}</li>;   
    });   
  return (
    <div><ul> <h3>{listItems} </h3></ul></div>
  )
}

export default Subcategory