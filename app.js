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
const respuesta = await fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=20&ts=1&apikey=1b4a71597fe79145195683ef11f4635b&hash=55f6472b12db4ff84b98cf97e899c1a0`);
console.log(respuesta)

const datos = await respuesta.json();
let personajes = datos.data.results;
console.log(personajes)
let heroes='';
personajes.forEach(persona=>{
  heroes+= `<div class=""> <h3>${persona.name}</h3>
  <a href="${persona.urls[1].url}"> <img src="${persona.thumbnail.path}.${persona.thumbnail.extension}" alt="${persona.name}" class="img-thumbnail"><br> </a> <br>
  </div>`
})
document.getElementById('resultado').innerHTML=heroes;
};

function obtenerComics(){
  const url = `https://gateway.marvel.com:443/v1/public/comics?limit=100&ts=1&apikey=1b4a71597fe79145195683ef11f4635b&hash=55f6472b12db4ff84b98cf97e899c1a0`
  fetch(url)
  .then(res=>res.json())
  .then((json)=>{
    let items=json.data.results;
    console.log(items)
    const HTMLResponse = document.querySelector("#resultado");
    const tpl = items.map((items)=> ` <div class="col-md-3"> <h3>${items.title}</h3>
                                         <a href="${items.urls[0].url}"> <img src="${items.thumbnail.path}.${items.thumbnail.extension}" alt="${items.title}"class="img-thumbnail"></a>
    </div>`);
    HTMLResponse.innerHTML = tpl;
  })
};

function obtenerSeries(){
  const url = `https://gateway.marvel.com:443/v1/public/series?limit=100&ts=1&apikey=1b4a71597fe79145195683ef11f4635b&hash=55f6472b12db4ff84b98cf97e899c1a0`
  fetch(url)
  .then(res=>res.json())
  .then((json)=>{
    let items=json.data.results;
    console.log(items)
    const HTMLResponse = document.querySelector("#resultado");
    const tpl = items.map((items)=> `<div class="col-md-3"> <h3>${items.title}</h3
                                         <a href="${items.urls[0].url}"> <img src="${items.thumbnail.path}.${items.thumbnail.extension}" alt="${items.title}"class="img-thumbnail"></a>
    </div>`);
    HTMLResponse.innerHTML = tpl;
  })
};
