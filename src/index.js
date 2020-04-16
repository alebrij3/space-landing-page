import Nav from './components/Nav';
import Hero from './components/Hero';
import getPhotos from './utils/getPhotos';
import './assets/styles/main.scss';

document.querySelector('header').innerHTML = Nav();
document.querySelector('.hero').innerHTML = Hero();

const showPhotos = async () => {
    const photos = await getPhotos();
    console.log(photos.latest_photos[0].img_src);
}
showPhotos();