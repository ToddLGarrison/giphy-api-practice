import fetch from 'node-fetch'
import apiKey from '../config/config';

const apiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;


const GetGiphyData = async () => {
    try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
            throw new Error("Error in fetching giphy data")
        }

        const data = await response.json()
        // console.log(data)

        return data.data

    } catch (error) {
        console.error("Fetch error:", error)
    }
}


GetGiphyData()

export default GetGiphyData