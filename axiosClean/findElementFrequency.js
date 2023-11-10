function findElementFrequency(arrayOfElements) {
    const elementCount = {}

    arrayOfElements.forEach((element) => {
        if (elementCount[element]) {
            elementCount[element] ++
        } else {
            elementCount[element] = 1
        }
    })

    return elementCount
}

export default findElementFrequency