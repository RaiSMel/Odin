import '../../css/home/home.css';
import { header } from '../header';
import { main } from './index.main';

const content = document.getElementById('content');
const components = () => {
    content.appendChild(header());
    content.appendChild(main());
}


components();
