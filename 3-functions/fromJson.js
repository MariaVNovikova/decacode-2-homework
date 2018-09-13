const path = require('path');
const fs = require('fs');

const pathToJSON = path.resolve(__dirname, 'index.json');
const JSONdata = fs.readFileSync(pathToJSON, 'utf8');

var data = JSON.parse(JSONdata);
var size = 0;
var people = "";
var avAge = 0;
var artists = "";

data.forEach(element => {
    size++;
    avAge+=element["age"];
    people+=element["age"]+" "+element["name"] + ", ";
    element["skills"].forEach(subelement => {
        if(subelement == "Paint"){
            artists+=element["name"] + ", ";
        }
    });
});

console.log("Количество пользователей: "+size);
console.log("Средний возраст пользователей: "+Math.round(avAge/size));
console.log(people.substring(0, people.length-2));
console.log("["+artists.substring(0,artists.length-2)+"]");