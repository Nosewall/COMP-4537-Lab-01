import React, { useEffect, useState } from 'react'

function Search({ types, checkedState, setCheckedState }) {

  const onChangeHandle = (type) => {
    const index = types.current.indexOf(type);
    const newCheckedState = checkedState.map((item, i) => i === index ? !item : item);
    setCheckedState(newCheckedState);
  }

  return (
    <div className='searchBoxes'>
      {
        types.current.map(type => {
          return (
            <div className='searchBox' key={type}>
              <input type="checkbox" name="pokeTypes" value={type} id={type} onChange={() => { onChangeHandle(type) }} />
              <label htmlFor={type}>{type}</label>
              <br />
            </div>
          )
        })
      }
    </div>
  )
}

export default Search