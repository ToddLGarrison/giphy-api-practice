import GetTitles from './GetTitles.js';

const arrayOfStrings = await GetTitles()

const FindMostCommonTitle = (arrayOfStrings) => {
    const wordsToExclude = ["the", "and", "an", "a", "my", "by", "gif"]
    const concatinatedString = arrayOfStrings.join(' ')
    const titles = concatinatedString.split(/\s+/)
    const titleFrequency = {}

    const filteredTitles = titles.filter((title) => {
        const cleanTitle = title.replace(/[.,\/#!$%^&*;:{}=\-_`~()]/g, "").toLowerCase()
        return !wordsToExclude.includes(cleanTitle)
    })

    filteredTitles.forEach((title) => {
        if (titleFrequency[title]) {
            titleFrequency[title]++
        } else {
            titleFrequency[title] = 1
        }
    })

    let mostCommonTitle = ""
    let highestFrequency = 0

    for (const title in titleFrequency) {
        if (titleFrequency[title] > highestFrequency) {
            mostCommonTitle = title
            highestFrequency = titleFrequency[title]
        }
    }

    console.log(`Most common title: ${mostCommonTitle} with a count of ${highestFrequency}`)
    return (`Most common title: ${mostCommonTitle}`)
}

FindMostCommonTitle(arrayOfStrings)

export default FindMostCommonTitle