import GetGiphyData from "./GetGiphyData.js";

const GetTitles = async () => {
    const titles = []

    try {
        const data = await GetGiphyData()
        
        data.map((gif) => {
            titles.push(gif.title)
        })

        return titles
    } catch (error) {
        console.error("Error in Fetch", error);
    }
} 

GetTitles()

export default GetTitles