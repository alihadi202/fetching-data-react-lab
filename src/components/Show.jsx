import React from 'react'

function Show({filtered}) {
  return (
    <>
        <ul>
            {filtered.map(filter=>
            
            <li>
                
                <h2>{filter.name}</h2>
                
                <p>Class: {filter.starship_class}</p>
                
                <p>Manufacturer: {filter.manufacturer}</p>
                
                <p>Model: {filter.model}</p>

            </li>
            )}
        </ul>
    </>
  )
}

export default Show;