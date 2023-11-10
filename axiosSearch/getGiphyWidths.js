import getGiphyData from "./getGiphyData.js";

async function getGiphyWidths() {
    //get gif data
    const gifs = await getGiphyData()
    // console.log(gifs)
    //find each gif in gifs
    const widths = []
    for (const gif of gifs) {
        //find the width of the gif
        // Object.values = method in JavaScript returns an array of the object's own enumerable property values
        for (const image of Object.values(gif.images)) {
            widths.push(image.width)
        }
    }
    // console.log(widths)

    //find width frequency
    const widthCount = {}
    widths.forEach((width) => {
        if (widthCount[width]) {
            widthCount[width] ++
        } else {
            widthCount[width] = 1
        }
    })
    // console.log(widthCount)

    //find most common width frequency
    let mostCommonWidth = ''
    let highestFrequency = 0

    for (const width in widthCount) {
        if (widthCount[width] > highestFrequency) {
            mostCommonWidth = width
            highestFrequency = widthCount[width]
        }
    }
    // console.log('Most common width:', mostCommonWidth)
    // console.log('Highest frequency:', highestFrequency)

    //total sum of all the widths to find the average width ignoring NaN and undefined
    const totalWidths = widths.reduce((acc, width) => {
        //if width is NaN or undefined return acc if not proceed with function
        if (!isNaN(width) && width !== undefined) {
            return acc + parseInt(width)
        }
            return acc
    }, 0)
    // console.log(`Total width:`, totalWidths)

    //Find average width
    const averageWidth = totalWidths / widths.length
    // console.log('Average Width', averageWidth)

    return {
        mostCommonWidth: mostCommonWidth,
        averageWidth: averageWidth,
    }
}

export default getGiphyWidths