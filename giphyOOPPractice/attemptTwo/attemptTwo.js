import axios from "axios";
import apiKey from "../../config/config.js";

//search function
const searchGiphy = (query, apiKey)=> {
    //set base url
    const apiUrl = 'https://api.giphy.com/v1/gifs/search'
    //set params
    const params = {
        q: query,
        api_key: apiKey,
        limit: 10,
    }

    //return get request to axios input URL and params 
    return axios.get(apiUrl, { params })
        //then when you get the response
            //remember response comes as response.data.data
        .then((response) => {
            //set gifs data
            const gifs = response.data.data
            
            //select titles of gifs
            const titles = gifs.map((gif) => gif.title)
            //return titles
            return titles
        })
        //error handling
        .catch((error) => {
            console.error('Error in fetching gifs data: ', error)
            //return empty array
            return []
        })
}

///TESTS
const query = 'Lord of the Rings'
searchGiphy(query, apiKey)
    .then((titles) => {
        console.log('Gif titles: ', titles)
    })
    .catch((error) => {
        console.error('Error in fetching: ', error)
    })