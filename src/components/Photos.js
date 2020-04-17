import getPhotos from '../utils/getPhotos';

const Photos = async () => {
    const photos = await getPhotos();
    const marsPhotosSection = document.getElementById('mars-photos');
    const view = 
        photos.map(
            photo => `<img src="${photo}" alt"Mars Photo" />`
        ).join('');
    marsPhotosSection.insertAdjacentHTML('beforeend', view);
    return view;
}

export default Photos;