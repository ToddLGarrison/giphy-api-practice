function findArrayAverage(array) {
    const allElementsTotal = array.reduce((acc, element) => {
        if (!isNaN(element) && element !== undefined) {
            return acc + parseInt(element)
        }
        return acc
    }, 0)

    const elementsAverage = allElementsTotal / array.length

    return elementsAverage
}

export default findArrayAverage;