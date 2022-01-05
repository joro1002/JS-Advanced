function solve(arr){
    arr.sort((a, b) => a.localeCompare(b));
    let count = 1;
    for (const current of arr) {
        console.log(count + '.' + current);
        count++;
    }
}

solve(["John", "Bob", "Christina", "Ema"]);