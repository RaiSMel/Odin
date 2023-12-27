import '../../css/contact/contact.css';
import { header } from '../header';
import { main } from './main';

const content = document.getElementById('content');
const components = () => {
    content.appendChild(header());
    content.appendChild(main());
}


components();
