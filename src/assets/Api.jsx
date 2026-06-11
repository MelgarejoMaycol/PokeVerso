const apiPokemon = 'https://pokeapi.co/api/v2';

export const getPokemon = async (numero) => {
    const pokemones = await fetch(`${apiPokemon}/pokemon/?limit=${numero}`)
    const resultadoPokemones = await pokemones.json();

    const detailsPokemones = await Promise.all(
        resultadoPokemones.results.map(async (pokemon) => {
            const pokemonDetalle = await fetch(pokemon.url);
            const pokemonDetalleRespuesta = await pokemonDetalle.json();

            return {
                id: pokemonDetalleRespuesta.id,
                nombre: pokemonDetalleRespuesta.name,
                imagen:
                    pokemonDetalleRespuesta.sprites.other.dream_world.front_default ||
                    pokemonDetalleRespuesta.sprites.other['official-artwork'].front_default ||
                    pokemonDetalleRespuesta.sprites.front_default,
                peso: pokemonDetalleRespuesta.weight,
                altura: pokemonDetalleRespuesta.height,
                tipos: pokemonDetalleRespuesta.types.map((tipo) => tipo.type.name)
            };
        })
    )

    return detailsPokemones;
}

export const getAllPokemons = async () => {
    const pokemones = await fetch(`${apiPokemon}/pokemon?limit=100000`)
    const resultadoPokemones = await pokemones.json();

    const detallesPokemonesConst = await Promise.all(
        resultadoPokemones.results.map(async (pokemon) => {
            const detallesPokemones = await fetch(pokemon.url);
            const detallesPokemonesResultado = await detallesPokemones.json();

            return {
                id: detallesPokemonesResultado.id,
                nombre: detallesPokemonesResultado.name,
                imagen:
                    detallesPokemonesResultado.sprites.other.dream_world.front_default ||
                    detallesPokemonesResultado.sprites.other['official-artwork'].front_default ||
                    detallesPokemonesResultado.sprites.front_default,
                peso: detallesPokemonesResultado.weight,
                altura: detallesPokemonesResultado.height,
                tipos: detallesPokemonesResultado.types.map((tipo) => tipo.type.name)
            };
        })
    )

    return detallesPokemonesConst;
}
