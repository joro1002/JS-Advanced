function solve(num) {
    let result = num;

    function adds(number) {
        result += number;
        return adds;
    }

    adds.toString = () => {
        return result;
    }

    return adds;
}

console.log(add(1)(6)(-3).toString);