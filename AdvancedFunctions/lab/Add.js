function solution(input) {
    let result = 0;
    function add5(num) {
        result = num + input;
        return result;
    }
    return add5;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
