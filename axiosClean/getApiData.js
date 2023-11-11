import axios from 'axios'
import apiKey from '../config/config.js'

async function getApiData() {
    const apiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`;

    try {
        const response = await axios.get(apiUrl)
        // console.log(response)
        return response.data.data
    } catch (error) {
        console.error(`Error getting API data: ${error}`)
    }
}

getApiData()

export default getApiData