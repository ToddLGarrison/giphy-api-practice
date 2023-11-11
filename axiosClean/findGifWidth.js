import getApiData from './getApiData.js';
import findElementFrequency from './findElementFrequency.js';
import findArrayAverage from './findArrayAverage.js';

async function findGifWidth() {
    const gifs = await getApiData()

    const widths = []
    for (const gif of gifs) {
        for (const image of Object.values(gif.images)) {
            widths.push(image.width)
        }
    }

    const widthCount = findElementFrequency(widths)

    const averageWidth = findArrayAverage(widths)

    return {
        mostCommonWidth: widthCount,
        averageWidth: averageWidth,
    }
}

export default findGifWidth;