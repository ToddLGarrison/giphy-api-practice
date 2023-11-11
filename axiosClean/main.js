import fetchAndDisplayTitles from "./fetchAndDisplayTitles.js";
import findMostCommonKeyword from "./findMostCommonKeyword.js";

async function main() {
    const titles = await fetchAndDisplayTitles()
    const mostCommonKeyword = await findMostCommonKeyword()

    console.log(titles)
    console.log(mostCommonKeyword)
}

main()

export default main