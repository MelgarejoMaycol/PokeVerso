import '../App.css';
import { PokemonTypeIcon } from "./IconType.jsx";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";

export const Modal = ({ isOpen, isClosed, datosGuardados, onEliminar }) => {
    if (!isOpen) return null

    return (
        <>
            <div className='Favoritos'>
                <h3>Favoritos</h3>
                {datosGuardados.length ? (
                    datosGuardados.map((pokemon) => (
                        <div className='tarjetasFavoritos' key={pokemon.id}>
                            <img src={pokemon.imagen} alt={pokemon.nombre} />
                            <div className='informacion1Favoritos'>
                                <h2>#{pokemon.id} {pokemon.nombre}</h2>
                                <div className="tiposPokemon">
                                    <PokemonTypeIcon type={pokemon.tipos} className="tipoPokemon" />
                                </div>
                            </div>
                            <div className='informacion2Favoritos'>
                                <p><span style={{ fontWeight: 'bold' }}>Peso: </span> {pokemon.peso / 10} Kg</p>
                                <p><span style={{ fontWeight: 'bold' }}>Altura: </span> {pokemon.altura / 10} M</p>
                            </div>
                            <button onClick={() => onEliminar(pokemon)}><span><MdDelete className='logoEliminarFavorito' /></span></button>
                        </div>
                    ))
                ) : (
                    <p>
                        Agregue Pokémon a favoritos
                    </p>
                )}

                <button onClick={isClosed} className='cerrarFavoritos'>Cerrar</button>
            </div>
        </>
    );
}

export default Modal
