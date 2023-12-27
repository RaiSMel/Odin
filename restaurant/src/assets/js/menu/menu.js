import '../../css/menu/menu.css';
import { header } from '../header';
import { main } from './menu.main';
 
const content = document.getElementById('content');
const components = () => {
    content.appendChild(header());
    content.appendChild(main());
}


components();
