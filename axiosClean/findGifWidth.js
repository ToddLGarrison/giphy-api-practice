import getApiData from './getApiData.js';
import findArrayAverage from './findArrayAverage.js';

async function findGifWidth() {
    const gifs = await getApiData()

    const widths = []
    for (const gif of gifs) {
        for (const image of Object.values(gif.images)) {
            widths.push(image.width)
        }
    }

    const averageWidth = findArrayAverage(widths)

    return {
        averageWidth
    }
}

export default findGifWidth;