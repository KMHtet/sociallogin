export const FormatDataWithColumns = (data: Array<any>, numCols: Number) => {
    const numberOfFullRows = Math.floor(data.length / numCols);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numCols;
    while (
        numberOfElementsLastRow !== numCols &&
        numberOfElementsLastRow !== 0
    ) {
        data.push({ empty: true });
        numberOfElementsLastRow++;
    }
    return data;
}