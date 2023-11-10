import getGiphyWidths from "./getGiphyWidths.js";

async function recommendedGiphyDesplay() {
    //get average width from getGiphyWidths
    const { averageWidth } = await getGiphyWidths();
    const screenWidth = 1024
    const margin = 10
    //figure out how many gifs can go into the screen size
    const gifsPerRow = Math.floor(screenWidth / (averageWidth + margin))

    console.log('Gifs per row:', gifsPerRow)
    return gifsPerRow
}

// recommendedGiphyDesplay()

export default recommendedGiphyDesplay