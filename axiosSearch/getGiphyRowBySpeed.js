import getGiphyBasedOnSpeed from "./getGiphyBasedOnSpeed.js";
import getOriginalGiphyWidth from "./getOriginalGiphyWidth.js";
import originalRecommendedGiphyDisplay from "./originalRecommendedGiphyDisplay.js";

async function getGiphyRowBySpeed() {
    const margin = 10

    const { averageOriginalWidth } = await getOriginalGiphyWidth()
    const giphySpeed = await getGiphyBasedOnSpeed()

    const lowSpeedCount = giphySpeed.lowSpeedCount
    const mediumSpeedCount = giphySpeed.mediumSpeedCount
    const highSpeedCount = giphySpeed.highSpeedCount

    const lowSpeedRows = originalRecommendedGiphyDisplay(lowSpeedCount, margin, averageOriginalWidth)
    const mediumSpeedRows = originalRecommendedGiphyDisplay(mediumSpeedCount, margin, averageOriginalWidth)
    const highSpeedRows = originalRecommendedGiphyDisplay(highSpeedCount, margin, averageOriginalWidth)

    console.log(lowSpeedRows, mediumSpeedRows, highSpeedRows)

    return
}

getGiphyRowBySpeed()

export default getGiphyRowBySpeed