(() => {



let elements = document.querySelector('[data-slides]');
let data = elements.getAttribute("data-slides");
let array = data.split(",");

//PageCounter
var $counter = document.createElement("count");
$counter.setAttribute("id", "counter");
$counter.innerHTML = "1/" + array.length;
elements.appendChild($counter);

//buttons
let prev = document.createElement("button");
prev.innerHTML="Prev";
elements.appendChild(prev);
prev.setAttribute("class", "buttonP");

let next = document.createElement("button");
next.innerHTML = "Next";
elements.appendChild(next);
next.setAttribute("class", "buttonN");

prev.addEventListener("click",showPrev);
next.addEventListener("click",showNext);

//create elements
for (i=0; i<array.length; i++) {
    let text = array[i];
    var div = document.createElement("div");
    div.innerHTML = text;
    div.setAttribute("id", i);
    elements.appendChild(div);

    if (i>0) {
        div.classList.add("is_hidden");}
        else {div.classList.add("is_shown");}
}

//pagination creation

for (i=0; i<array.length; i++) {
        var $pag = document.createElement("li");
        $pag.setAttribute("id", "p" + i);
        elements.appendChild($pag);
    
        if (i>0) {
            $pag.classList.add("non_active");}
            else {$pag.classList.add("active");}
        
        $pag.addEventListener("click",pagSwitch.bind(null, i));
}

//4 sec next
setInterval(showNext, 4000);


function showPrev() {
        var index = document.getElementsByClassName("is_shown")[0].getAttribute("id");
        var indexNew = 0;

        if (index>0){
                indexNew = index - 1;
        } else {
                indexNew = array.length-1;
        }
        
        document.getElementById(indexNew).setAttribute("class","is_shown");
        document.getElementById(index).setAttribute("class", "is_hidden"); 
        
        document.getElementById("p"+indexNew).setAttribute("class","active");
        document.getElementById("p"+index).setAttribute("class", "non_active"); 

        $counter.innerHTML = (indexNew*1+1) + "/" + array.length;
}

function showNext() {
        var index = document.getElementsByClassName("is_shown")[0].getAttribute("id");
        let indexNew = 0;

        if (index<array.length-1){
                indexNew = index*1 + 1;
        } else {
                indexNew = 0;
        }

        document.getElementById(indexNew).setAttribute("class","is_shown");
        document.getElementById(index).setAttribute("class", "is_hidden"); 

        document.getElementById("p"+indexNew).setAttribute("class","active");
        document.getElementById("p"+index).setAttribute("class", "non_active"); 

        $counter.innerHTML = (indexNew*1+1) + "/" + array.length;
}

function pagSwitch(i){
        document.getElementsByClassName("active")[0].setAttribute("class","non_active");
        document.getElementById("p"+i).setAttribute("class","active");

        document.getElementsByClassName("is_shown")[0].setAttribute("class","is_hidden");
        document.getElementById(i).setAttribute("class","is_shown");

        $counter.innerHTML = (i*1+1) + "/" + array.length;
}
  })();