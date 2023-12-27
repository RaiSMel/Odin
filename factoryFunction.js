// closures são funções que retornam outras funções e assim conseguem utilizar variaveis 
// do escopo dessa outra instrução como mostrado a seguir


// function makeAdding (firstNumber) {
//     const first = firstNumber;
//     return function resulting (secondNumber) {
//       const second = secondNumber;
//       return first + second;
//     }
//   }

//   const add5 = makeAdding(5);
//   console.log(add5(2))


// Destructing é uma expressão que permite a extração de um valor de um array ou um 
// objeto exemplos a seguir 

// // objeto
// const obj = { a: 1, b: 2 };
// const { a, b } = obj;

// // array
// const array = [1, 2, 3, 4, 5];
// const [ zerothEle, firstEle ] = array;

// Variaveis privadas e funções através do closures podemos crias variaveis 
// locais e acessar através de funções como a seguir

// function createUser (name) {
//     const discordName = "@" + name;
  
//     let reputation = 0;
//     const getReputation = () => reputation;
//     const giveReputation = () => reputation++;
  
//     return { name, discordName, getReputation, giveReputation };
//   }
  
//   const josh = createUser("josh");
//   josh.giveReputation();
//   josh.giveReputation();
  
//   console.log({
//     discordName: josh.discordName,
//     reputation: josh.getReputation()
//   })

//   inheritance com os factories através dos destructing podemos herdar novas classe veja a seguir
  
//   function createPlayer (name, level) {
//     const { discordName, getReputation } = createUser(name);
  
//     const increaseLevel = () => level++;
//     return { name, discordName, getReputation, increaseLevel };
//   }

// Funcões invocadas imediatamente IIFE, que a função é encapsulada e executada em seguida

// ( () => {
//     console.log("IIFE");
// })();

// Module pattern - IIFEs Usado quando não é preciso utilizar variaveis privadas sendo 
// executado uma vez e não guardando os valores de dentro da função

// const calculator = (function () {
//     const add = (a, b) => a + b;
//     const sub = (a, b) => a - b;
//     const mul = (a, b) => a * b;
//     const div = (a, b) => a / b;
//     return { add, sub, mul, div };
//   })();
  
//   calculator.add(3,5); // 8
//   calculator.sub(6,2); // 4
//   calculator.mul(14,5534);

