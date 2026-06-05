import { useEffect, useState } from 'react';
import './App.css';
import { getPokemonList } from './assets/Api.jsx';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    getPokemonList().then(data => setPokemonList(data));
  }, []);

  return (
    <>
      <div className="App">
        <div className="Encabezado">
          <h1>PokeVerso</h1>
          <button>Favoritos</button>
        </div>
        <div className="Contenido">
          <div className="PokemonList">
            <h2>Lista de Pokémon</h2>
            {pokemonList.map((pokemon, index) => (
              <div key={index} className="PokemonCard">
                <img src={pokemon.imagen} alt={pokemon.nombre} />
                <p>#{pokemon.id}</p>
                <p>{pokemon.nombre}</p>
                <p>{pokemon.tipo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
