import getApiData from './getApiData.js'

const gifs = await getApiData()

async function getTitles(gifs) { 
    const titles = gifs.map(gif => gif.title)

    console.log(titles)

    return
}

getTitles()

export default getTitles