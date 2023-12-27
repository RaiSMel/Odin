import barImg from "../../img/bar.avif";
import restauranteImg from "../../img/restaurante.jpg";

export const main = () => {
    const mainHome = document.createElement('main');
    mainHome.classList.add('main');
    const json = [barImg, restauranteImg];
    const title = ['Our Bar', 'Restaurant']
    const texts = ['Welcome to our Bar, the heart and soul of our restaurant experience. Nestled within our culinary haven, our bar is a vibrant and inviting space where the art of mixology meets the warmth of shared moments. Here, we craft more than just cocktails; we curate an atmosphere where friends gather, conversations flow, and memories are stirred.', 'As the sun dips below the horizon, our bar transforms into a haven for those in pursuit of relaxation and conviviality. From the comforting embrace of dimmed lights to the rhythmic cadence of cocktail shakers, every detail is meticulously curated to enhance your dining experience.']
    let count = 0;
    json.forEach(url => {        
        let imagem = new Image();
        imagem.src = url;

        let card = document.createElement('div');
        card.classList.add('card');
        card.style.backgroundImage = `url(${imagem.src})`;
        
        let apresentacao = document.createElement('div');
        apresentacao.classList.add('apresentacao');
        card.appendChild(apresentacao);

        let titulo = document.createElement('h1');
        titulo.innerHTML = `<br><br><br>${title[count]}`;
        titulo.classList.add('card--titulo');
        let text = document.createElement('p');
        text.innerHTML = texts[count]
        count++;
        text.classList.add('card--text')
        apresentacao.appendChild(titulo);
        apresentacao.appendChild(text);

        mainHome.appendChild(card);
    });
    
    return mainHome;
};