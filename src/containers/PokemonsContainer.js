import React, {useState} from 'react'
import Pokemon from '../components/Pokemon'
import { useQuery } from 'react-apollo';
import {GET_POKEMONS} from '../graphql/get-pokemons'

function PokemonsContainer() {
    const [filter, setFilter] = useState(0);
  
    const {data: {pokemons = []} = {}} = useQuery(GET_POKEMONS, {
      variables: {first: 9},
    });
    
    const filteredPokemons = pokemons.filter(pokemon => {
      const weight = parseFloat(pokemon.weight.maximum.replace('.', '').replace('kg', '')) / 100;
  
      return filter < weight
    })
  
    return (
      <div className="container">
        <button type='button' onClick={() => setFilter(100)}>
          Filter Heavier than 100kg
        </button>
        <button type='button' onClick={() => setFilter(50)}>
          Filter Heavier than 50kg
        </button>
        <button type='button' onClick={() => setFilter(0)}>
          reset filter
        </button>
        {filteredPokemons && filteredPokemons.map(pokemon =>
          <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
      </div>
  
    );
  }
  
  export default PokemonsContainer;