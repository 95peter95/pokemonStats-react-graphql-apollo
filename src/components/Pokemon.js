import React from 'react'

function Pokemon({ pokemon }) {
return (
<div className = "pokemon">
    <div className = "pokemon__name">
        <p>{pokemon.name}</p>
    </div>
    <div className = "pokemon__image">
        <img src={pokemon.image} alt={pokemon.name}/>
    </div>
    <div className = "pokemon__meta">
        <span>max hp: {pokemon.maxHP}</span>
        <br/>
        <span>{pokemon.maxCP}</span>
        <br/>
        <span>{pokemon.weight.maximum}</span>
    </div>
    <div className = "pokemon__atacks">
        Atacks:
    {pokemon.attacks.special.map(attack => (
        <span key={`${attack.name}-${attack.damage}`}>
                {` ${attack.name}`}
        </span>
    ))}
    </div>

</div>


)}

export default Pokemon;