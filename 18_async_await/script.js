//request paralelos
const getPokemonNumber = pokemonNumber =>
    `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`

const getPokemon = async () => {
    const promisePokemon1 = axios.get(getPokemonNumber(1))
    const promisePokemon4 = axios.get(getPokemonNumber(4))
    const promisePokemon7 = axios.get(getPokemonNumber(7))

    const pokemons = await Promise.all([
        promisePokemon1,
        promisePokemon4,
        promisePokemon7
    ])
    console.log(pokemons)
    // const namePokemons1 = pokemons[0].data.name
    const arrayNames = []
    for (const name of pokemons) {
        arrayNames.push(name.data.name)
    }
    console.log(arrayNames.join(', '))
}
getPokemon()