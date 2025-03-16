const URL_GET_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/';

// Método async/await
const obtenerListadoPokemons = async () => {
    const resultadoAPI = await fetch(URL_GET_POKEMONS);
    console.log('resultado de la API', resultadoAPI);
    const datos = await resultadoAPI.json();
    console.log('datos de la API', datos);
    const listaPokemons = datos.results;
    console.log('listado pokemon', listaPokemons);

    // Ahora necesitamos obtener los detalles de cada pokemon
    const pokemonesConDetalles = await Promise.all(
        listaPokemons.map(async (pokemon) => {
            const respuesta = await fetch(pokemon.url);
            return await respuesta.json();
        })
    );

    // Pintamos los pokemons con todos sus detalles
    pintarPokemon(pokemonesConDetalles);
}

obtenerListadoPokemons();

const pintarPokemon = (datosPokemon) => {
    console.log('datos pokemon desde la funcion pintarPokemon', datosPokemon);
    // Pintar tarjetas en el html
    let tarjetas = document.getElementById('coleccion-tarjetas');
    
    // Limpiar el contenedor de tarjetas antes de añadir nuevas
    tarjetas.innerHTML = '';

    // Pintamos tantas tarjetas como elementos tenga nuestro array
    datosPokemon.forEach(element => {
        // Creamos un div con la clase card
        const divCard = document.createElement('div');
        divCard.classList.add('card');
        
        // Extraer el tipo principal del pokémon
        const tipoPrincipal = element.types[0]?.type.name || 'desconocido';
        
        // Rellenamos la tarjeta
        divCard.innerHTML = `
        <div class="content">
          <div class="back">
            <div class="back-content">
              <div class="contenedor-portada">
                <div class="margen-superior-contenedor-portada"></div>
                <div class="imagen-portada">
                  <img src="${element.sprites.other.showdown?.front_default || element.sprites.front_default}"
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
              <img src="${element.sprites.other.home?.front_default || element.sprites.front_default}"
                alt="Imagen de portada detalle">
              <div class="description">    
                <div class="title">
                  <p class="title">
                    <strong><a href="detalle.html?name=${element.name}">${element.name}</a></strong>
                  </p>
                </div>
                <p class="card-footer">
                  Altura: ${element.height/10}m &nbsp; | &nbsp; Peso: ${element.weight/10}kg &nbsp; | &nbsp; Tipo: ${tipoPrincipal}
                </p>
              </div>
            </div>
          </div>
        </div>`;

        // Añadimos el div al contenedor de tarjetas
        tarjetas.appendChild(divCard);
    });
}
/*
// Función para buscar un pokemon específico
const buscarPokemon = async () => {
    let input = document.getElementById('buscador');
    let nombrePokemon = input.value.toLowerCase().trim();
    
    if (nombrePokemon === '') {
        // Si está vacío, mostrar todos los pokemons
        obtenerListadoPokemons();
        return;
    }
    
    try {
        const resultadoAPI = await fetch(URL_GET_POKEMONS + nombrePokemon);
        
        if (!resultadoAPI.ok) {
            throw new Error('Pokemon no encontrado');
        }
        
        const datosPokemon = await resultadoAPI.json();
        pintarPokemon([datosPokemon]); // Lo mandamos como array para que funcione con el mismo pintarPokemon
        
        // Actualizar mensaje
        document.getElementById('general').textContent = `Mostrando información de ${nombrePokemon}`;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('general').textContent = `No se encontró ningún Pokémon llamado "${nombrePokemon}"`;
        document.getElementById('coleccion-tarjetas').innerHTML = '';
    }
}
*/
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