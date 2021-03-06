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
  <a class="btn btn-primary" href="./identidad.html?id=${persona.id}">Detalles</a>
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

function saludar(){
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var id = urlParams.get('id');
  let url=`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=1b4a71597fe79145195683ef11f4635b&hash=55f6472b12db4ff84b98cf97e899c1a0`;
  async function naren(){
  const respuesta = await fetch(`${url}`);
  console.log(respuesta)
  const datos = await respuesta.json();
  let detalles = datos.data.results;
  console.log(detalles);
  let heroes='';
  detalles.forEach(detalle=>{
  heroes+= `<div class="resultss"><h3>${detalle.name}</h3>
                                  <img src="${detalle.thumbnail.path}.${detalle.thumbnail.extension}" class="img-thumbnail"> <br>
                                   <br>
                                  <a class="btn btn-primary" href="${detalle.urls[0].url}">Pagina oficial</a> <br><br>
                                  <button id="series" name="${detalle.id}" class="btn btn-primary" onclick="series();">Series</button>
                                  <button id="comics" name="${detalle.id}" class="btn btn-primary" onclick="comics();">Comics</button>
    </div>`
  })

  document.getElementById('resultado').innerHTML=heroes;
  }
  naren();
}

function series(){
  let x = document.getElementById('series').name;
  let url = `https://gateway.marvel.com:443/v1/public/characters/${x}/series?ts=1&apikey=1b4a71597fe79145195683ef11f4635b&hash=55f6472b12db4ff84b98cf97e899c1a0`
  async function naren(){
    const respuesta = await fetch(`${url}`);
    const datos = await respuesta.json();
    let detalles = datos.data.results;
    console.log(detalles);
    let heroes='';
    detalles.forEach(detalle=>{
    heroes+= `<div class="resultss"><h3>${detalle.title}</h3>
                                    <a href="${detalle.urls[0].url}"><img name="${detalle.id}" src="${detalle.thumbnail.path}.${detalle.thumbnail.extension}" class="img-thumbnail"></a>


      </div>`
    })

    document.getElementById('resultado2').innerHTML=heroes;
  }
  naren();
}

function comics(){
  let x = document.getElementById('comics').name;
  let url = `https://gateway.marvel.com:443/v1/public/characters/${x}/comics?ts=1&apikey=1b4a71597fe79145195683ef11f4635b&hash=55f6472b12db4ff84b98cf97e899c1a0`
  async function naren(){
    const respuesta = await fetch(`${url}`);
    const datos = await respuesta.json();
    let detalles = datos.data.results;
    console.log(detalles);
    let heroes='';
    detalles.forEach(detalle=>{
    heroes+= `<div class="resultss"><h3>${detalle.title}</h3>
                                    <a href="${detalle.urls[0].url}"><img name="${detalle.id}" src="${detalle.thumbnail.path}.${detalle.thumbnail.extension}" class="img-thumbnail"></a> <br><br><br>


      </div>`
    })

    document.getElementById('resultado2').innerHTML=heroes;
  }
  naren();
}
