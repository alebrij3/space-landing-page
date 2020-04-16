import Nav from './components/Nav';
import Hero from './components/Hero';
import './assets/styles/main.scss';

document.querySelector('header').innerHTML = Nav();
document.getElementsByClassName('hero')[0].innerHTML = Hero();
