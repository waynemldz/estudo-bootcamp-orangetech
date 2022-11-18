// criou o arquivo ./complementoPromise parar linkar a api

function convertPokemonToLi(pok) {
    return `
    <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pok.name}</span>
                
                <div class="detail">
                    <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                        alt="${pok.name}">
                </div>
            </li>
    `
}

const pokemons = document.getElementById('pokemonList')
// conteúdo desejado
pokeApi.getPokemons().then((pokemonArr = []) => {

    // simplificando tudo

    pokemons.innerHTML += pokemonArr.map(convertPokemonToLi).join('') 

 
    //utilizando o map
 
    // const list = pokemonArr.map((pokemon)=>{
    //     return convertPokemonToLi(pokemon)
    //  })
 
    //  const newHTML = list.join('');
    //  pokemons.innerHTML += newHTML;

    

    // trará o mesmo resultado que o map acima

    // const listItems = []
    // for (let i = 0; i < pokemonArr.length; i++) {
    //     const pokemon = pokemonArr[i];
    //     listItems.push(convertPokemonToLi(pokemon))
    // }

    // pokemons.innerHTML = listItems;

})  
    .catch(err => console.error(err))
