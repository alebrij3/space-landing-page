import Nav from './components/Nav';
import Hero from './components/Hero';
import Photos from './components/Photos';
import './assets/styles/main.scss';

window.addEventListener('load', Photos);

document.querySelector('header').innerHTML = Nav();
document.querySelector('.hero').innerHTML = Hero();