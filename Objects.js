// function Person(name) {
//     this.name = name;
// }


// Person.prototype.sayName = function(){
//     return `Hello, I'm ${this.name} and i'm 22 years old!`;
// }

// function Player(name, marker){
//     this.name = name;
//     this.marker = "marker";
// }

// Player.prototype = Person.prototype

// function Enemy(name, marker){
//     this.name = name;
//     this.marker = marker;
// }

// Object.setPrototypeOf(Enemy.prototype, Person.prototype);
// Enemy.prototype = Person.prototype;

// Enemy.prototype.sayName = function(){
//    return "hello";
// }

// let Joj = new Person('Jooj', 22);

// let Arold = new Enemy("Arold", "^");

// console.log(Arold.prototype.sayName());


// testando inherit das referências prototype

let fruta = {fruto: "sim"};
let abacaxi = {doce: "s"};
abacaxi.__proto__ = fruta;

let Fruta = {
    name: "Maçã",
    cor: "Vermelho",
    set propriedade(value){
        [this.name ,this.cor] = value.split(" ")
    },
    get propriedade() {
        return this.name + " " + this.cor;
    }
};

console.log(Fruta.propriedade)
Fruta.propriedade = "Abacaxi Verde"

console.log(Fruta.propriedade)

