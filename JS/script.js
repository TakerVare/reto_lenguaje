const URL_GET_POKEMONS = "https://pokeapi.co/api/v2/pokemon/"

const obtenerListadoPokemon = async () => {
    const resultadoAPI = await fetch(URL_GET_POKEMONS) // Esto es una promesa que hacemos a la URL de la API 

    console.log('Resultado de la API', resultadoAPI)
    const datos = await resultadoAPI.json()
/**
 * datos = {
 * count: number,
 * next: string,
 * previosu: string,
 * results: Array
 * }
 */
    console.log('Resultado de la API', datos)
    const listaPokemons = datos.results;
    console.log('listado pokemon', listaPokemons)


    //Pintamos el pokemon en el html
    
    listaPokemons.forEach(element => {
        pintaPokemon(element)
    });


}

obtenerListadoPokemon()

const pintaPokemon = (datosPokemon) => {
    console.log('Datos pokemon desde la función pintarPolkemon', datosPokemon)
    /**
     * datosPokemon = {
     * name: "bulbasur",
     * url: "https://pokeapi.co/api/v2/pokemon/1"
     * }
     */
    let tarjetas = document.getElementById('tarjetas')
    



    const divCard = document.createElement('div')
    divCard.classList.add('cardBox')
    divCard.innerHTML = `
    <div class="card">
                <div class="front">
                    <h3>${datosPokemon.name}</h3>
                    
                    <strong>&#x21bb;</strong>
                </div>
                <div class="back">
                    <a href="detalle.html?name=${datosPokemon.name}"><h3>${datosPokemon.name}</h3></a>
                    
                    <a href="${datosPokemon.url}">Ver info del pokemon</a>
                </div>
            </div>
    `
    tarjetas.appendChild(divCard)


}

const buscarPokemon = async () => {
    let input = document.getElementById('buscador')
    let inp_val = input.value;
    console.log('Se ha buscado un pokemon', inp_val)
}