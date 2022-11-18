// Conteúdo da aula


const offset = 0;
const limit = 10;  // quantidade de pokemons
const url = `https://pokeapi.co/api/v2/pokemon?off-set=${offset}&limit=${limit}`


// o 'fecth' solicita uma resposta assíncrona, por que não é dado uma resposta 
// imediata, neste caso utilizaremos o then, ele diz que executará quando a
// recurso for disponibilizado
fetch(url)
    .then(response => {             // executará quando tiver a resposta
        console.log(response);
        // response.json();        // fornece o objeto convertido (mostrado no body pelo console acima)
        response.json().then(function (responseBody){
            console.log(responseBody);
        }) 
    })
    .catch(err => {
        console.error(err)          // executará em caso de erro no processamento
    })
    .finally(() => {
        console.log('Requisição concluída')     // dará uma resposta independete de then ou catch
    })