import getOriginalGiphyWidth from "./getOriginalGiphyWidth.js";

async function originalRecommendedGiphyDisplay () {
    const { averageOriginalWidth } = await getOriginalGiphyWidth();
    const screenWidth = 1024
    const margin = 10

    const originalGifsPerRow = Math.floor(screenWidth / (averageOriginalWidth + margin))

    console.log('Original Width Sized Gifs Per Row:', originalGifsPerRow)
    return originalGifsPerRow
}

export default originalRecommendedGiphyDisplay