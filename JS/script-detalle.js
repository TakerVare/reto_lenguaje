window.addEventListener('DOMContentLoaded', (event) => {

    // Primero recuperamos el valor del pokemon que hemos hecho click de la URL
    let parametrosURL = new URLSearchParams(document.location.search)
    let nombre = parametrosURL.get("name")
    console.log('parametros en la URL', nombre)


    const URL_GET_POKEMONS = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

    const obtenerDetallePokemon = async () => {
        const resultadoAPI = await fetch(URL_GET_POKEMONS); // promesa que hacemos a la url de la API
        console.log('resultado de la API', resultadoAPI)
        const datos = await resultadoAPI.json()
         /**
         * detallePokemon = {
         *  height: number,
         *  id: number,
         *  name: string,
         *  types: Array,
         *  sprites: Array
         *  weight: number
         * }
         * 
         */
        console.log('datos de la API', datos)
    
        // Pintamos el pokemon en el html
        pintarPokemon(datos)
    }

    obtenerDetallePokemon();

});

const pintarPokemon = (pokemon) => {
    console.log('datos pokemon desde la funcion pintarPokemon', pokemon)
    // Pintar tarjetas en el html
    let tarjeta = document.getElementById('coleccion-tarjetas')

        // Creamos un div con la clase cardBox
        const divCard = document.createElement('div')
        divCard.classList.add('coleccion-tarjetas')
        /**
         * types = [
         * {
            * slot,
            * type {
            *  name, ---> NOS QUEDAMOS SOLO CON EL NOMBRE
            *  url
            * }
         * },
         * {
            * slot,
            * type {
            *  name, ---> NOS QUEDAMOS SOLO CON EL NOMBRE
            *  url
            * }
         * },]
         */
        let tipos = pokemon.types.map((item) => {
            console.log('item: ', item.type.name)
            return item.type.name
        })
        console.log('tipos es un array: ', tipos)

        let pintartipos = tipos.join(', ')

        console.log('tipos: ', pintartipos)

        // Rellenamos la tarjeta

        divCard.innerHTML = `
        <div class="card-izquierda">
            <div class="content">
                <div class="front">
                    <div class="front-content">
                        <div class="margen-superior"></div>
                        <div class="img">
                            <img src="${pokemon.sprites.other.home?.front_default || pokemon.sprites.front_default}"
                            alt="Imagen del pokemon detalle">
                        </div>
                        <div class="margen-medio"></div>
                        <div class="contenedor-numero-pokemon">
                            <div class="numero-pokemon"><strong>#${pokemon.id}</strong></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-derecha">
            <div class="content">
                <div class="front">
                    
                    <div class="front-content">
                        <div class="margen-superior"></div>
                        <div class="datos-pokemon">
                            <div class="nombre-pokemon"><strong>Nombre: ${pokemon.name}</strong></div>
                            <div class="altura-peso-pokemon"><strong>Altura: ${pokemon.height/10}m &nbsp; | Peso: ${pokemon.weight/10}kg &nbsp;</strong></div>
                            <div class="tipo-pokemon"><strong>Tipo: ${pintartipos}</strong></div>
                            <div class="especie-pokemon"><strong>Especie: ${pokemon.species.name}</strong></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>`
       
        
         
        // Añadimos el div al contenedor de tarjetas
        tarjeta.appendChild(divCard)



    
}

const buscadorPokemon = () => {
    let input = document.getElementById('buscador');
    let nombrePokemon = input.value.toLowerCase().trim();
    
    if (nombrePokemon === '') {
        // Si está vacío, mostrar un mensaje o mantener la lista actual
        alert('Por favor, introduce el nombre de un Pokémon');
        return;
    }
    
    // Redirigir a la página de detalle con el nombre del Pokémon como parámetro
    window.location.href = `detalle.html?name=${nombrePokemon}`;
  }
   
