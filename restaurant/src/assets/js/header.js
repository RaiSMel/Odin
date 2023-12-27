import logoImg from '../img/logo.png'

export const header = () => {
    const cabecalho = document.createElement('header');
    cabecalho.classList.add('header');

    const img = new Image();
    img.src = logoImg;
    img.classList.add('logo');
    img.onclick = () => location.href = 'index.html';

    const nav = document.createElement('nav');
    nav.innerHTML = `
        <ul class="menu">

        <li class='menu--list'>
        <a class='menu--link' href="index.html">HOME</a>
        </li>

        <li class='menu--list'>
        <a class='menu--link' href="menu.html">MENU</a>
        </li>

        <li class='menu--list'>
        <a class='menu--link' href="contact.html">CONTACT</a>
        </li>

        </ul>
    `;

    cabecalho.appendChild(img);
    cabecalho.appendChild(nav)
    return cabecalho;
}
