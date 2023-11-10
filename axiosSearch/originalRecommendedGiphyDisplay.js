import getOriginalGiphyWidth from "./getOriginalGiphyWidth.js";

async function originalRecommendedGiphyDisplay () {
    const { averageOriginalWidth } = await getOriginalGiphyWidth();
    const screenWidth = 1024
    const margin = 10

    const originalGifsPerRow = Math.floor(screenWidth / (averageWidth + margin))

    console.log('Original Gifs Per Row:', originalGifsPerRow)
    return originalGifsPerRow
}

originalRecommendedGiphyDisplay()

export default originalRecommendedGiphyDisplay