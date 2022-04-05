document.querySelector('#Listar_heroes').addEventListener('click',function(){
  obtenerHeroes();
});

document.querySelector('#Listar_comics').addEventListener('click',function(){
  obtenerComics();
});

document.querySelector('#Listar_series').addEventListener('click',function(){
  obtenerSeries();
});

function obtenerHeroes(){
const url = `https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=1b4a71597fe79145195683ef11f4635b&hash=55f6472b12db4ff84b98cf97e899c1a0`;
fetch(url)
.then(res=>res.json())
.then((json)=>{
  let items = json.data.results;
  console.log(items)
  let ts = '1'
  let apikey = '1b4a71597fe79145195683ef11f4635b'
  let hash = '55f6472b12db4ff84b98cf97e899c1a0'
  const HTMLResponse = document.querySelector("#resultado");
  const tpl = items.map((items)=> `<div class="col-md-2"> <h3>${items.name}</h3>
                                   <a href="${items.urls[1].url}"> <img src="${items.thumbnail.path}.${items.thumbnail.extension}" alt="${items.name}" class="img-thumbnail"><br> </a> <br>



  </div>`);
  HTMLResponse.innerHTML = tpl;
})
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
