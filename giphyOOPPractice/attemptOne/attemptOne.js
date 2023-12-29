import axios from 'axios';
import apiKey from '../../config/config.js';


function searchGiphy(query, apiKey) {
    // GIPHY API endpoint and parameters
    const apiUrl = 'https://api.giphy.com/v1/gifs/search';
    const params = {
    q: query,
    api_key: apiKey,
    limit: 10,
    };

    // Make the API request using Axios
    return axios.get(apiUrl, { params })
    .then((response) => {
        // console.log(response.data)
        const gifs = response.data.data;
        // console.log(gifs);
        const titles = gifs.map((gif) => gif.title);
        return titles; // Return an array of titles
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
        return [];
    });
}

// Example usage

const query = 'cats';
searchGiphy(query, apiKey)
    .then((titles) => {
    console.log('GIF Titles:', titles);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
});