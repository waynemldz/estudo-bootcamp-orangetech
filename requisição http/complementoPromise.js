const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?off-set=${offset}&limit=${limit}`
    return fetch(url)
    // promise de any
    .then(response => response.json()) // convertendo para json
    .then(jsonBody => jsonBody.results)
    .catch(error => console.error(error))
}