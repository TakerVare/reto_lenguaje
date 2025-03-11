const URL_GET_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/1';

// Método async/await
const obtenerListadoPokemons = async () => {
    const resultadoAPI = await fetch(URL_GET_POKEMONS); // promesa que hacemos a la url de la API
    console.log('resultado de la API', resultadoAPI)
    const datos = await resultadoAPI.json()
    console.log('datos de la API', datos)
     /**
     * datos = {
     *  count: number,
     *  next: string,
     *  previous: string,
     *  results: Array
     * }
     * 
     */
    /*
    
    const listaPokemons = datos.results;
    */
    //console.log('listado pokemon', listaPokemons)
    
    

    // Pintamos el pokemon en el html
    pintarPokemon(datos)
   
}

// function obtenerListadoPokemons() {}
obtenerListadoPokemons()

const pintarPokemon = (datosPokemon) => {
    console.log('datos pokemon desde la funcion pintarPokemon', datosPokemon)
    // Pintar tarjetas en el html
    let tarjetas = document.getElementById('coleccion-tarjetas')

    // Pintamos tantas tarjetas como elementos tenga nuestro array
    datosPokemon.forEach(element => {
        // Creamos un div con la clase cardBox
        const divCard = document.createElement('div')
        divCard.classList.add('card')
        // Rellenamos la tarjeta
        divCard.innerHTML = `
        <div class="content">
          <div class="back">
            <div class="back-content">
              <div class="contenedor-portada">
                <div class="margen-superior-contenedor-portada"></div>
                <div class="imagen-portada">
                  <img src="${element.sprites.other.showdown.front_default}"
                    alt="Imagen de portada">
                </div>
              </div>
              <div class="contenedor-nombre"><strong>${element.name}</strong></div>
    
            </div>
    
          </div>
          <div class="front">    
            <div class="img">    
            </div>    
            <div class="front-content">
              <small class="badge">#${element.id}</small>
              <img src="${element.sprites.other.home.front_default}"
                alt="Imagen de portada detalle">
              <div class="description">    
                <div class="title">
                  <p class="title">
                    <strong>${element.name}</strong>
                  </p>
                </div>
                <p class="card-footer">
                  Altura: ${element.height} &nbsp; | &nbsp; Peso: ${element.weigth} &nbsp; | &nbsp; Tipo:
                </p>
              </div>
            </div>
          </div>
        </div>`



        // Añadimos el div al contenedor de tarjetas
        tarjetas.appendChild(divCard)
    })


    
}




/**
 * 
 * 
 * 
 */

//const URL_GET_POKEMONS = "https://pokeapi.co/api/v2/pokemon/"
/*
const obtenerListadoPokemon = async () => {
    const resultadoAPI = await fetch(URL_GET_POKEMONS) // Esto es una promesa que hacemos a la URL de la API 

    console.log('Resultado de la API', resultadoAPI)
    const datos = await resultadoAPI.json()

*/    
/**
 * datos = {
 * count: number,
 * next: string,
 * previosu: string,
 * results: Array
 * }
 */
/*
    console.log('Resultado de la API', datos)
    const listaPokemons = datos.results;
    console.log('listado pokemon', listaPokemons)


    //Pintamos el pokemon en el html
    
    listaPokemons.forEach(element => {
        pintaPokemon(element)
    });


}
*/
/*
obtenerListadoPokemon()

const pintaPokemon = (datosPokemon) => {
    console.log('Datos pokemon desde la función pintarPolkemon', datosPokemon)
    */
    /**
     * datosPokemon = {
     * name: "bulbasur",
     * url: "https://pokeapi.co/api/v2/pokemon/1"
     * }
     */
    /*
    let tarjetas = document.getElementById('tarjetas')
    



    const divCard = document.createElement('div')
    divCard.classList.add('coleccion-tarjetas')
    
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
    /*
    <div class="card">
        <div class="content">
          <div class="back">
            <div class="back-content">
              <div class="contenedor-portada">
                <div class="margen-superior-contenedor-portada"></div>
                <div class="imagen-portada">
                  <img src="${datosPokemon.sprites.other.showdown.front_default}"
                    alt="Imagen de portada">
                </div>
              </div>
              <div class="contenedor-nombre"><strong>${datosPokemon.name}</strong></div>
    
            </div>
    
          </div>
          <div class="front">
    
            <div class="img">
    
            </div>
    
            <div class="front-content">
              <small class="badge">#(número del pokemon)</small>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/150.png"
                alt="Imagen de portada detalle">
              <div class="description">
    
                <div class="title">
                  <p class="title">
                    <strong>Nombre Pokemon</strong>
                  </p>
                </div>
                <p class="card-footer">
                  Altura: &nbsp; | &nbsp; Peso: &nbsp; | &nbsp; Tipo:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
*/


/*
    tarjetas.appendChild(divCard)


}

const buscarPokemon = async () => {
    let input = document.getElementById('buscador')
    let inp_val = input.value;
    console.log('Se ha buscado un pokemon', inp_val)
}
    */