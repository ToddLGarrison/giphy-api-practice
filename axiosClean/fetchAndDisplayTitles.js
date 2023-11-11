import getApiData from './getApiData.js'


async function fetchAndDisplayTitles() { 
    const gifs = await getApiData()
    const titles = gifs.map(gif => gif.title)

    return titles
}

export default fetchAndDisplayTitles