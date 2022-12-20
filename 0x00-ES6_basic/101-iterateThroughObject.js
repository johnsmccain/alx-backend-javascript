export default function iterateThroughObject(reportWithIterator) {

    let tempArr = ''
    reportWithIterator.forEach((item, i) => {
        // tempArr += (' '+item);
        if (i == 0) {
            tempArr += `${item} `
        }else {
            tempArr += `| ${item} `
        }

    })
    return tempArr;
}