const getPhotos = async () => {
    const apiURL = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/latest_photos';
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        const latestPhotos = [];
        for (let i = 0; i < 15; i++) {
            latestPhotos.push(data.latest_photos[i].img_src);
        }
        //console.log(latestPhotos);
        return latestPhotos;
    } catch (e) {
        console.log('There was a fetch error: ' + e);
    }
}

export default getPhotos;