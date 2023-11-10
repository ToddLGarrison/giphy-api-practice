import getGiphyData from './getGiphyData.js';

async function getTitles() {
    //get gif data from getGiphyData
    const gifs = await getGiphyData()

    //extract titles from gifs
    const titles = gifs.map(gif => gif.title)
    // console.log(`titles:`, titles)

    //join all titles together into a single string
    const allTitlesJoined = titles.join(' ')
    // console.log(allTitlesJoined)

    //remove all special characters from all titles
    const cleanJoinedTitles = allTitlesJoined.replace(/[.,\/#!$%^&*;:{}=\-_`~()]/g, '').toLowerCase()
    //split allTitlesJoined into individual words
    const words = cleanJoinedTitles.split(/\s+/)
    //console.log(words)

    const wordsToExclude = ['the', 'and', 'an', 'a', 'my', 'by', 'gif'];

    //count frequency of words
    const wordCount = {}
    //for each word in words
    words.forEach(word => {
        //if the word is not in the words to exclude list then
        if(!wordsToExclude.includes(word)) {
            //if word is already on the wordCount list increase frequency count
            if(wordCount[word]) {
                wordCount[word]++
            } else {
                //if not frequency counter is 1
                wordCount[word] = 1
            }
        }
    })

    // console.log(wordCount)

    //find the most frequent word
    let mostCommonWord = ''
    let highestFrequency = 0

    for (const word in wordCount) {
        //if the words' word count is greater than the highest frequency
        if (wordCount[word] > highestFrequency) {
            //the most common word is the wordCount[word]
            mostCommonWord = word
            //highest frequency is now equal to the frequency of the wordCount[word]
            highestFrequency = wordCount[word]
        }
    }

    console.log(`Most common word: '${mostCommonWord}' with a frequency of ${highestFrequency}`)

    return mostCommonWord
}

// getTitles()

export default getTitles