import React from 'react'

function Pokemon({ pokemon }) {
  const getThreeDigitId = (id) => {
    if (id < 10) return `00${id}`
    if (id < 100) return `0${id}`
    return id
  }

  return (
    <>
    <div className="pokemon">
      <img src={`https://github.com/fanzeyi/pokemon.json/raw/master/images/${getThreeDigitId(pokemon.id)}.png`} />
      <div className="info">
        <span className="number">#{getThreeDigitId(pokemon.id)}</span>
        <h3 className="name">{pokemon.name.english}</h3>
        <small className="type">Type: <span>{pokemon.type.join(' | ')}</span></small>
      </div>
    </div>
    </>
  )
}

export default Pokemon