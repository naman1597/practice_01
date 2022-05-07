const container = document.querySelector('#container');

const request = new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v3.1/name/nepal");
request.send();

request.addEventListener('load',function(){
    //console.log(this.responseText);
   const [data] = JSON.parse(this.responseText);
   //console.log(data);
   
   const htmlData = `
    <div id="card">
    <article class="card">
        <div class="card-body">
        <img src = "${data.flags.png}" alt="" class="card-body-img" />
        <h1 class="card-body-title"> Country :
        ${data.name.common}<span></span>
        </h1>
        <h1 class="card-body-text"> capital : ${data.capital}</h1>
        </div>
        <div class="card-footer">
        <div class="card-footer-social">
        <h1>Continent : ${data.continents}</h1>
        
        </div>
        <div class="card-footer-social">
        <h1>Population : ${data.population}</h1>
        
        </div>
        <div class="card-footer-social">
        <h1>Demonym : ${data.demonyms.eng.f}</h1>
        
        </div>
        </div>
   </article>
   </div>
    `;
    container.insertAdjacentHTML('afterbegin',htmlData)
   
})