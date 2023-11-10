import getGiphyData from "./getGiphyData.js";

async function getOriginalGiphyWidth () {
    const gifs = await getGiphyData()

    const originalWidths = []
    // pull out the original widths from the gifs
    for(const gif of gifs) {
        // console.log('Images original property: ', gif.images.original.width)

        const originalWidth = gif.images && gif.images.original && gif.images.original.width

        if(!isNaN(originalWidth) && originalWidth !== undefined) {
            originalWidths.push(originalWidth)
        }
    }
    // console.log('Original widths: ', originalWidths)

    //find the width frequency
    const originalWidthCount = {}
    originalWidths.forEach((originalWidth) => {
        if (originalWidthCount[originalWidth]) {
            originalWidthCount[originalWidth] ++
        } else {
            originalWidthCount[originalWidth] = 1
        }
    })
    // console.log('Original widths count: ', originalWidthCount)

    //find most common width frequency
    let mostCommonOriginalWidth = ''
    let highestFrequency = 0

    for (const originalWidth in originalWidthCount) {
        if (originalWidthCount[originalWidth] > highestFrequency) {
            mostCommonOriginalWidth = originalWidth
            highestFrequency = originalWidthCount[width]
        }
    }

    

    return
}

getOriginalGiphyWidth()

export default getOriginalGiphyWidth