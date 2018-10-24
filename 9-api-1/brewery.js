(() => {

// div for buttonand input

let div = document.createElement("div");
let searchbutton = document.createElement("button");
searchbutton.innerHTML="More details";
div.appendChild(searchbutton);
searchbutton.setAttribute("class", "button");

let inputfield = document.createElement("input");
div.appendChild(inputfield);
inputfield.id = "input";
document.body.appendChild(div);

//div for data

let divBrewery = document.createElement("divBrewery");
let breweryList = document.createElement("ul");
document.body.appendChild(divBrewery);
divBrewery.appendChild(breweryList);


update();

searchbutton.addEventListener("click", update);


function update(){

divBrewery.removeChild(breweryList);      // clean up previous fetch
breweryList = document.createElement("ul");
divBrewery.appendChild(breweryList);


   if(document.getElementById("input").value == ""){
    fetch('https://api.openbrewerydb.org/breweries')
    .then(res => res.json())
    .then( (data) => {

        for(i=0; i<data.length; i++) {                //немного не поняла по заданию - написано, что надо вывести все имеющиеся
            let li = document.createElement("li");    // поля по дефолту - но если их все вывести (через JSON.stringify(data[i])),
            li.innerHTML = data[i].name;              // то молучается некрасивая длинная строка... поэтому я вывожу только имя)))
            breweryList.appendChild(li);              // 
        }});
    }else{
        fetch('https://api.openbrewerydb.org/breweries?by_name='+document.getElementById("input").value)
        .then(res => res.json())
        .then((data) => {
            let li = document.createElement("li");
            li.innerHTML = 'Brewery name: ' + data[0].name +'<br>'+
                            'Brewery adress: '+ data[0].street +", "+ data[0].city +", "+ data[0].state +", "+ data[0].country+", "
                                              + data[0].postal_code+'<br>'+
                            'Brewery phone: '+ data[0].phone+ '<br>'+                 
                            'Brewery web-cite: ' +data[0].website_url;
            breweryList.appendChild(li); 
            })
     };
  };
})();