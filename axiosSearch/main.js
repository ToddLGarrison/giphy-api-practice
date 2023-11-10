import getGiphyWidths from "./getGiphyWidths.js";
import getTitles from "./getTitles.js";
import recommendedGiphyDisplay from "./recommendedGiphyDisplay.js";
import originalRecommendedGiphyDisplay from "./originalRecommendedGiphyDisplay.js";


async function main() {
    getTitles()
    getGiphyWidths()
    recommendedGiphyDisplay()
    originalRecommendedGiphyDisplay()
}

main()