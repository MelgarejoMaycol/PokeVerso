import { useEffect, useState } from 'react';
import imagen from "../public/Logo.png";
import './App.css';
import { getAllPokemons, getPokemon } from "./assets/Api.jsx";
import Favoritos from './components/Favoritos.jsx';
import TarjetaPokemon from './components/TarjetasPokemon.jsx';

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [allPokemones, setAllPokemones] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const obtenerPokemones = async () => {
      const datos = await getPokemon(20);
      const allDatos = await getAllPokemons();
      setPokemones(datos);
      setAllPokemones(allDatos);
    }

    obtenerPokemones();
  }, []);

  const AgregarFavorito = ((nuevoDato) => {
    const datoDuplicado = favoritos.some(item => item.id === nuevoDato.id);
    if (!datoDuplicado) {
      setFavoritos((favoritos) => [...favoritos, nuevoDato]);
    } else {
      console.log("¡Este Pokémon ya está en favoritos!");
    }
  })

  const eliminarFavorito = (favoritoEliminar) => {
    const nuevaLista = favoritos.filter((favorito) => favorito.id !== favoritoEliminar.id);
    setFavoritos(nuevaLista);
  }

  const resultados = allPokemones.filter((pokemon) =>
    pokemon.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const listaPokemones = busqueda ? resultados : pokemones;

  return (
    <>
      <div className="App">
        <div className="Encabezado">
          <h1><span><img src={imagen} alt="logo" /></span> PokeVerso</h1>
          <button onClick={() => (setModalAbierto(true))}>Favoritos {favoritos.length}</button>
        </div>
        <div className="Contenido">
          <div className="PokemonList">
            <h2>Lista de Pokémon</h2>
            <input
              type="text"
              placeholder='Buscar Pokémon...'
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <div className='Pokemones'>
              {listaPokemones.map((pokemon) => (
                <div key={pokemon.id}>
                  <TarjetaPokemon pokemon={pokemon} onGuardar={AgregarFavorito} datosGuardados={favoritos} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Favoritos
          isOpen={modalAbierto}
          isClosed={() => setModalAbierto(false)}
          datosGuardados={favoritos}
          onEliminar={eliminarFavorito}
        />
      </div>
    </>
  )
}

export default App
