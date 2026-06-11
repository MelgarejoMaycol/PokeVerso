import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import '../App.css';
import { PokemonTypeIcon } from "./IconType.jsx";


function TarjetaPokemon({ pokemon, onGuardar, datosGuardados }) {
    const yaEstaGuardado = datosGuardados.some(item => item.id === pokemon.id);

    return (
        <>
            <div className='tarjetaPokemon'>
                <h3>#{pokemon.id} {pokemon.nombre}</h3>
                <img src={pokemon.imagen} alt={pokemon.nombre} />
                <div className='detallesPokemon'>
                    <div className="tiposPokemon">
                        <PokemonTypeIcon type={pokemon.tipos} className="tipoPokemon" />
                    </div>
                    <p><span style={{ fontWeight: 'bold' }}>Peso: </span> {pokemon.peso / 10} Kg</p>
                    <p><span style={{ fontWeight: 'bold' }}>Altura: </span> {pokemon.altura / 10} M</p>
                </div>
                <button
                    onClick={() => onGuardar(pokemon)}
                    disabled={yaEstaGuardado}
                    className={`boton-favorito ${yaEstaGuardado ? 'boton-deshabilitado' : ''}`}
                >
                    {yaEstaGuardado ? (
                        <p><span><FaHeart className='LogoFavorito' /></span>Ya está en favoritos</p>
                    ) : (
                        <p><span><FaHeart className='LogoFavorito' /></span>Agregar a favoritos</p>
                    )}
                </button>

            </div>
        </>
    )
}

export default TarjetaPokemon
