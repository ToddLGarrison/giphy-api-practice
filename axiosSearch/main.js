import getGiphyWidths from "./getGiphyWidths.js";
import getTitles from "./getTitles.js";
import recommendedGiphyDisplay from "./recommendedGiphyDisplay.js";

async function main() {
    getTitles()
    getGiphyWidths()
    recommendedGiphyDisplay()
}

main()