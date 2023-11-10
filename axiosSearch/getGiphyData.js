import axios from 'axios'

async function getGiphyData(){
    const apiKey = "zG9o2WmVq2q0lySuGOstOjU4LZhmIn8H"
    const apiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`;

    try {
        const response = await axios.get(apiUrl);
        // console.log(response.data.data)
        return response.data.data
    } catch (error) {
        console.error(`Error in Fetching:`, error)
    }
}

// getGiphyData()

export default getGiphyData 