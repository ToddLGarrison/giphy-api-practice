function findMostCommonElement(objectOfElements) {
    let mostCommonElement = ''
    let highestFrequency = 0

    for (const element in objectOfElements){
        if(objectOfElements[element] > highestFrequency){
            mostCommonElement = element
            highestFrequency = objectOfElements[element]
        }
    }

    return {mostCommonElement: mostCommonElement, highestFrequency: highestFrequency}
}

export default findMostCommonElement