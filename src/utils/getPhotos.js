const getPhotos = async () => {
    const apiURL = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/latest_photos';
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (e) {
        console.log('There was a fetch error: ' + e);
    }
}

export default getPhotos;