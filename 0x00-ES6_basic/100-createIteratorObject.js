export default function createIteratorObject(report) {
    let temp = Object.values(report.allEmployees);
    let tempArr = [];
    temp.forEach(arr => {
        arr.forEach(arr1 => {
            arr1.forEach(arr2 => {
                tempArr.push(arr2);
            });
        });
    });
    
    return(tempArr);
}