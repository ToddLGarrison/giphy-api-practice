import getApiData from './getApiData.js'


async function fetchAndDisplayTitles() { 
    const gifs = await getApiData()
    const titles = gifs.map(gif => gif.title)

    // console.log(titles)

    return titles
}

export default fetchAndDisplayTitles