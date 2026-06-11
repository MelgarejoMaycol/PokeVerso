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
  const [cargandoTodos, setCargandoTodos] = useState(true);

  useEffect(() => {
    const obtenerPokemones = async () => {
      const datos = await getPokemon(10);
      setPokemones(datos);

      const allDatos = await getAllPokemons();
      setAllPokemones(allDatos);
      setCargandoTodos(false);
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

  const textoBusqueda = busqueda.trim().toLowerCase();

  const resultados = allPokemones.filter((pokemon) => {
    const nombre = pokemon.nombre.toLowerCase();
    const id = pokemon.id.toString();
    const tipos = pokemon.tipos.map((tipo) => tipo.toLowerCase());

    return (
      nombre.includes(textoBusqueda) ||
      id.includes(textoBusqueda) ||
      tipos.some((tipo) => tipo.includes(textoBusqueda))
    );
  });

  const listaPokemones = textoBusqueda ? resultados : pokemones;

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
              placeholder='Buscar por nombre, tipo o ID...'
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            {cargandoTodos && (
              <p className="mensajeCarga">
                Cargando todos los Pokémon para la búsqueda...
              </p>
            )}
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
