import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

let determiner = ['a', 'my', 'your', 'the', 'our'];
let descriptiveAdj = ['fast', 'super', 'best', 'creative','great', 'big'];
let objectNoun = ['site', 'app', 'solution', 'idea'];
let dominioGenerico = [".com", ".org", ".net", ".gov"];

for (let i = 0 ; i < determiner.length; i++) {
  for (let j = 0 ; j < descriptiveAdj.length; j++) {
    for (let k = 0 ; k < objectNoun.length; k++) {
      for (let l = 0 ; l < dominioGenerico.length; l++) {
        console.log(determiner[i] + descriptiveAdj[j] + objectNoun[k] + dominioGenerico[l]);
      }
    }
  }
}
};
