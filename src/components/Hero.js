import img from '../assets/img/earth.png';

const earth = img;

const Hero = () => {
    const view = `
        <h1>We can understand the universe. That makes us something very special</h1>
        <img src="${earth}" alt="Earth" />
    `;
    return view;
}

export default Hero;