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
            highestFrequency = originalWidthCount[originalWidth]
        }
    }
    // console.log('Most common original width:', mostCommonOriginalWidth)
    // console.log('Highest frequency:', highestFrequency)

    //total sum of all the original widths to find average width Ignoring NaN and Undefined values
    const totalOriginalWidths = originalWidths.reduce((acc, originalWidth) => {
        if (!isNaN(originalWidth) && originalWidth !== undefined) {
            return acc + parseInt(originalWidth)
        }
            return acc
    }, 0)

    // console.log('Total original widths:', totalOriginalWidths)

    //find average original width
    const averageOriginalWidth = totalOriginalWidths / originalWidths.length

    console.log('Average original width:', averageOriginalWidth)

    return
}

getOriginalGiphyWidth()

export default getOriginalGiphyWidth