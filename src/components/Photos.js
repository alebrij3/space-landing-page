import getPhotos from '../utils/getPhotos';

const Photos = async () => {
    const latestPhotos = await getPhotos();
    const marsPhotosSection = document.getElementById('mars-photos');
    const view = 
        latestPhotos.map(
            photo => `<img src="${photo}" alt"Mars Photo" />`
        ).join('');
    marsPhotosSection.innerHTML = view;
    return view;
}

export default Photos;
