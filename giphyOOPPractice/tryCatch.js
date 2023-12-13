import axios from 'axios';
import apiKey from '../config/config.js';

const searchGiphy = async (query, apiKey) => {
    const apiURL = 'https://api.giphy.com/v1/gifs/search';
    const params = {
        q: query,
        apiKey: apiKey,
        limit: 15,
    }

    try {
        const response = await axios.get(apiURL, { params })
        const gifs = response.data.data
        const titles = gifs.map((gif) => gif.title)
        return titles
    } catch (error) {
        console.error(`Error in fetching data:`, error);
        return []
    }
}

