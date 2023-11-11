import fetchAndDisplayTitles from "./fetchAndDisplayTitles.js";
import findGifWidth from "./findGifWidth.js";
import findMostCommonKeyword from "./findMostCommonKeyword.js";

async function main() {
    const titles = await fetchAndDisplayTitles()
    const mostCommonKeyword = await findMostCommonKeyword()
    const gifWidth = await findGifWidth()

    console.log('Trending titles:', titles)
    console.log(`The most frequent keyword is ${mostCommonKeyword.mostCommonElement} with a count of ${mostCommonKeyword.highestFrequency}`)
    console.log(`The average gif width is: ${gifWidth.averageWidth}`)
}

main()

export default main