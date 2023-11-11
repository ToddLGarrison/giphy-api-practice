import fetchAndDisplayTitles from "./fetchAndDisplayTitles.js";
import findMostCommonElement from "./findMostCommonElement.js";

async function findMostCommonKeyword() {
    const titles = await fetchAndDisplayTitles()
    
    const allTitlesJoined = titles.join(' ')
    const cleanTitlesJoined = allTitlesJoined.replace(/[.,\/#!$%^&*;:{}=\-_`~()]/g, '').toLowerCase()

    const keywords = cleanTitlesJoined.split(/\s+/)
    const wordsToExclude = ['the', 'and', 'an', 'a', 'my', 'by', 'gif'];

    const keywordCount = {}
    keywords.forEach(keyword => {
        if(!wordsToExclude.includes(keyword)){
            if(keywordCount[keyword]) {
                keywordCount[keyword] ++
            } else {
                keywordCount[keyword] = 1
            }
        }
    })

    const mostCommonKeyword = findMostCommonElement(keywordCount)

    return mostCommonKeyword
}

export default findMostCommonKeyword