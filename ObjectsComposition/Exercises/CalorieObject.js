function solve(arr){
    let obj = {};
    for (let index = 0; index < arr.length; index+=2) {
        let name = arr[index];
        let quantity = Number(arr[index + 1]);
        obj[name] = quantity;
    }
    return obj;
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);