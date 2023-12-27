import barImg from "../../img/bar.avif";

export const main = () => {
    const img = new Image();
    const mainContact = document.createElement('main');
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const text = document.createElement('p');

    mainContact.classList.add('main');
    img.src = barImg;
    mainContact.style.background = `url(${img.src})`;
    
    title.innerHTML = 'We are the greater Place to eat';
    text.innerHTML = 'We invite you to appreciate our plates<br/>Tel: (11) 99745-0882';
    
    container.classList.add('container--contact')
    container.appendChild(title);
    container.appendChild(text);
    container.innerHTML += `<iframe class="cc--iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29257.977056990145!2d-46.67879283499405!3d-23.559566099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d28f062217%3A0x1584e434136015e8!2sGusto%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1703052544586!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

    mainContact.appendChild(container);

    return mainContact;
}