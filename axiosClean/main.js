import fetchAndDisplayTitles from "./fetchAndDisplayTitles.js";
import findGifWidth from "./findGifWidth.js";
import findMostCommonKeyword from "./findMostCommonKeyword.js";

async function main() {
    const titles = await fetchAndDisplayTitles()
    const mostCommonKeyword = await findMostCommonKeyword()
    const gifWidth = await findGifWidth()

    console.log(titles)
    console.log(mostCommonKeyword)
    console.log(gifWidth)
}

main()

export default main