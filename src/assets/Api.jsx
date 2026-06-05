const apiPokemon = 'https://pokeapi.co/api/v2';

export async function getPokemonList(limit = 20) {
    const response = await fetch(`${apiPokemon}/pokemon?limit=${limit}`);
    const data = await response.json();

    return data.results.map((pokemon) => ({
        nombre: pokemon.name,
        url: pokemon.url,
    }));
}