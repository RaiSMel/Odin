import bigPieImg from "../../img/bigPie.jpg";
import cookiesImg from "../../img/cookies.jpg";
import frangoImg from "../../img/frango.jpg";
import iceCreamImg from "../../img/iceCream.jpg";
import pancakeImg from "../../img/pancake.png";
import pieImg from "../../img/pie.jpg";
import pinacoladaImg from "../../img/pinacolada.jpg";
import caipirinhaImg from "../../img/caipirinha.png";
import sexbeachImg from "../../img/sexbeach.jpg";
import daiquiriImg from "../../img/daiquiri.avif";
import aperolspritzImg from "../../img/aperolspritz.jpg";
import negroniImg from "../../img/negroni.jpg";
const plates = [
    { name: 'Big Pie', description: 'stranberry, nutty, decked out with pastry, crumble', imgUrl: bigPieImg },
    { name: 'Vegan Cookies', description: 'soja milk, wheat, chocolate 70%, sugar', imgUrl: cookiesImg },
    { name: 'Roast Chiken', description: 'lettuce, tomatos, fries, chiken, chief\'s sauce', imgUrl: frangoImg },
    { name: 'Ice cream <br> w/ Waffles', description: 'Flavors: chocolate, Vanila, Açai', imgUrl: iceCreamImg },
    { name: 'American Pancakes', description: 'wheat, milk, eggs, honey or caramel', imgUrl: pancakeImg },
    { name: 'Small Pie', description: 'stranberry, nutty, decked out with pastry, crumble', imgUrl: pieImg }
];

const drinks = [
    { name: 'Pinã colada', description: 'rum, coconut milk, pineapple juice, sugar and ice', imgUrl: pinacoladaImg },
    { name: 'Caipirinha de limão', description: 'limon, sugar, vodka, ice', imgUrl: caipirinhaImg },
    { name: 'Sex on the <br> beach', description: 'vodka, peach liqueur, orange juice, currant syrup, ice', imgUrl: sexbeachImg },
    { name: 'Daiquiri', description: 'rum, lemon juice, syrup, ice, lemon slices', imgUrl: daiquiriImg },
    { name: 'Aperol spritz', description: 'sparkling Prosecco, aperol, sparkling water, ice cubes, Orange slice', imgUrl: aperolspritzImg },
    { name: 'Negroni', description: 'Gin, Campari, Red Vermouth, Fresh Bahia Orange Peel, Ice', imgUrl: negroniImg },
];

const createElements = (item) => {

    let imagem = new Image();
        imagem.src = item.imgUrl;

        let card = document.createElement('div');
        card.classList.add('card');
        card.style.backgroundImage = `url(${imagem.src})`;

        let apresentacao = document.createElement('div');
        apresentacao.classList.add('apresentacao');
        card.appendChild(apresentacao);

        let titulo = document.createElement('h1');
        titulo.innerHTML = `<br><br><br>${item.name}`;
        titulo.classList.add('card--title');
        let text = document.createElement('p');
        text.innerHTML = item.description;
        text.classList.add('card--text')
        apresentacao.appendChild(titulo);
        apresentacao.appendChild(text);

        return card;
}

export const main = () => {
    const containerButtons = document.createElement('div');
    const containerCardsDrinks = document.createElement('div');
    const containerCardsPlates = document.createElement('div');
    containerButtons.classList.add(`container--buttons`);
    containerCardsDrinks.classList.add(`container--cards`);
    containerCardsPlates.classList.add(`container--cards`);
    const mainMenu = document.createElement('main');
    mainMenu.classList.add('main');
    
    const buttonPlates = document.createElement('a');
    buttonPlates.classList.add('cb--button');
    buttonPlates.role = 'button';
    buttonPlates.innerHTML = "Plates";
    containerButtons.appendChild(buttonPlates);
    
    const buttonDrinks = document.createElement('a');
    buttonDrinks.classList.add('cb--button');
    buttonDrinks.role = 'button';
    buttonDrinks.innerHTML = "Drinks";
    containerButtons.appendChild(buttonDrinks);


    plates.forEach(plate => {
        mainMenu.style.setProperty('--button-activated', '102px')
        containerCardsPlates.appendChild(createElements(plate));
    })

    drinks.forEach(drink => {
        containerCardsDrinks.appendChild(createElements(drink));
        containerCardsDrinks.style.display = "none";
    })
    
    buttonDrinks.onclick = () => {
        mainMenu.style.setProperty('--button-activated', '0px')
        containerCardsDrinks.style.display = "flex";
        containerCardsPlates.style.display = "none";
    }
    buttonPlates.onclick = () => {
        mainMenu.style.setProperty('--button-activated', '102px')
        containerCardsDrinks.style.display = "none";
        containerCardsPlates.style.display = "flex";
    }
    
    
    mainMenu.appendChild(containerButtons);
    mainMenu.appendChild(containerCardsPlates);
    mainMenu.appendChild(containerCardsDrinks)
    return mainMenu;
}

