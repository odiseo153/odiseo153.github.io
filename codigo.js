

var caja = document.getElementById('tarjeta')
let url ='https://api.themoviedb.org/3/movie/popular?api_key=64bb1282d5dc2ff52d51cad2f09345c2&language=en-US&page=1'

function getDatos() {
  let url = '/datos.json';
  fetch(url)
    .then(dato => dato.json())
    .then(data => mostrarDatos(data))
    .catch(err => 
      {
        inabilitar('Algo salio mal revise su conexcion')
      })
}

getDatos()



//funcion que recibe los datos del servidor
const mostrarDatos = (dato) => {

  let img = 'https://image.tmdb.org/t/p/w500'
 
  
  dato.forEach(e => {

    
    caja.innerHTML += `
  <br> 
    <div class="card" style="width: 18rem;" id="pelis">
    <img class="card-img-top" src="${e.imagenDetras}" alt="Card image cap">
    <div class="card-body" id="texto">
    <p class="card-text" id="id">${e.id}</p>
    <h5 class="card-title">Titulo: ${e.titulo}</h5> 
    <p class="card-text">Description: ${e.descripcion}</p>

    <p class="card-text">Año: ${e.fecha}</p>

    </div>
  </div>
  <br>
`
      })

}











function inabilitar(texto)
{



alerta.innerHTML +=`  
<br>  <div class="alert alert-danger" role="alert">
${texto}
</div>`

}







