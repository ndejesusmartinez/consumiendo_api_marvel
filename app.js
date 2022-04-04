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
const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=1b4a71597fe79145195683ef11f4635b&hash=55f6472b12db4ff84b98cf97e899c1a0`;
fetch(url)
.then(res=>res.json())
.then((json)=>{
  let items = json.data.results;
  console.log(items)
  const HTMLResponse = document.querySelector(".resultado");
  const tpl = items.map((items)=> ` <h3>ID: ${items.id}</h3>
                                       Name: ${items.name}<br>
                                       <a href="${items.urls[0].url}"> <img src="${items.thumbnail.path}.${items.thumbnail.extension}" alt="${items.name}"><br> </a>
  `);
  HTMLResponse.innerHTML = tpl;
})
};

function obtenerComics(){
  const url = `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=1b4a71597fe79145195683ef11f4635b&hash=55f6472b12db4ff84b98cf97e899c1a0`
  fetch(url)
  .then(res=>res.json())
  .then((json)=>{
    let items=json.data.results;
    console.log(items)
    const HTMLResponse = document.querySelector(".resultado");
    const tpl = items.map((items)=> ` <h3>ID: ${items.id}</h3>
                                         Name: ${items.title}<br>
                                         <a href="${items.urls[0].url}"> <img src="${items.thumbnail.path}.${items.thumbnail.extension}" alt="${items.title}"></a>
    `);
    HTMLResponse.innerHTML = tpl;
  })
};

function obtenerSeries(){
  const url = `https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=1b4a71597fe79145195683ef11f4635b&hash=55f6472b12db4ff84b98cf97e899c1a0`
  fetch(url)
  .then(res=>res.json())
  .then((json)=>{
    let items=json.data.results;
    console.log(items)
    const HTMLResponse = document.querySelector(".resultado");
    const tpl = items.map((items)=> ` <h3>ID: ${items.id}</h3>
                                         Name: ${items.title}<br>
                                         <a href="${items.urls[0].url}"> <img src="${items.thumbnail.path}.${items.thumbnail.extension}" alt="${items.title}"></a>
    `);
    HTMLResponse.innerHTML = tpl;
  })
};
