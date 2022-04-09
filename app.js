document.querySelector('#Listar_heroes').addEventListener('click',function(){
  obtenerHeroes();
});

document.querySelector('#Listar_comics').addEventListener('click',function(){
  obtenerComics();
});

document.querySelector('#Listar_series').addEventListener('click',function(){
  obtenerSeries();
});

async function obtenerHeroes(){
const respuesta = await fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=1b4a71597fe79145195683ef11f4635b&hash=55f6472b12db4ff84b98cf97e899c1a0`);
//console.log(respuesta)

const datos = await respuesta.json();
let personajes = datos.data.results;
//console.log(personajes)
let heroes='';
personajes.forEach(persona=>{
  heroes+= `<div class=""> <h3>${persona.name}</h3>
  <a href="${persona.urls[1].url}"> <img src="${persona.thumbnail.path}.${persona.thumbnail.extension}" alt="${persona.name}" class="img-thumbnail"><br> </a> <br>
  </div>`
})
document.getElementById('resultado').innerHTML=heroes;
};

async function obtenerComics(){
  const respuesta = await fetch(`https://gateway.marvel.com:443/v1/public/comics?limit=100&ts=1&apikey=1b4a71597fe79145195683ef11f4635b&hash=55f6472b12db4ff84b98cf97e899c1a0`);
    const datos = await respuesta.json();
    let comics = datos.data.results;
    let comicsComic ='';
    comics.forEach(comi=>{
      comicsComic+=`<div>
                    <h3>${comi.title}</h3>
                    <a href="${comi.urls[0].url}"> <img src="${comi.thumbnail.path}.${comi.thumbnail.extension}" alt="${comi.title}"class="img-thumbnail"></a>
      </div>`
    })
    document.getElementById('resultado').innerHTML=comicsComic;
};

async function obtenerSeries(){
  const respuesta = await fetch(`https://gateway.marvel.com:443/v1/public/series?limit=100&ts=1&apikey=1b4a71597fe79145195683ef11f4635b&hash=55f6472b12db4ff84b98cf97e899c1a0`);
  const datos = await respuesta.json();
  let series=datos.data.results;
  let totalSeries = '';
  series.forEach(seri=>{
    totalSeries+=`<div>
                  <h3>${seri.title}</h3>
                  <a href="${seri.urls[0].url}"> <img src="${seri.thumbnail.path}.${seri.thumbnail.extension}" alt="${seri.title}"class="img-thumbnail"></a>
    </div>`
  })
  document.getElementById('resultado').innerHTML=totalSeries;
};

function buscarPersonajes(){
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var nombre_personaje = urlParams.get('nombre');
let url=`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${nombre_personaje}&limit=100&ts=1&apikey=1b4a71597fe79145195683ef11f4635b&hash=55f6472b12db4ff84b98cf97e899c1a0`;
async function naren(){
const respuesta = await fetch(`${url}`);
console.log(respuesta)
const datos = await respuesta.json();
let personajes = datos.data.results;
console.log(personajes);
let heroes='';
personajes.forEach(persona=>{
heroes+= `<div class="resultss"><h3>${persona.name}</h3>
                                <img src="${persona.thumbnail.path}.${persona.thumbnail.extension}" class="img-thumbnail">
  </div>`
})

document.getElementById('resultado').innerHTML=heroes;
};
naren();
}

function saludar(){
  alert('hola mundo')
}
