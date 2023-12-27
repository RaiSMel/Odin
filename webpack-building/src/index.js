// this line were imported
import _ from "lodash";
import './style.css';
import Icon from './rai.jfif'
import toml from './data.toml';
import yaml from "./data.yaml";
import json from './data.json5'
import print from "./print";

console.log(toml.title); 
console.log(toml.owner.name); 

console.log(yaml.title); 
console.log(yaml.owner.name); 

console.log(json.title); 
console.log(json.owner.name); 

function component() {
    const element = document.createElement('div');

    print();
    // use npm i --save lodash / Lodash, now imported by this script

    // npx webpack / use that to build a main.js
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const img = new Image();
    img.src = Icon;

    element.appendChild(img);
  
    return element;
  }
  
  document.body.appendChild(component());
