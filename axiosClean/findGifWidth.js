import getApiData from './getApiData.js';

async function getGifWidth() {
    const gifs = await getApiData()

    const widths = []
    for (const gif of gifs) {
        for (const image of Object.values(gif.images)) {
            widths.push(image.width)
        }
    }
    
}

export default getGifWidth;