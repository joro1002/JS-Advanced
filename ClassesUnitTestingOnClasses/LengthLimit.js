class Stringer {
    constructor(word, lenght) {
        this.word = word;
        this.lenght = lenght;
    }

    decrease(currentLenght) {
        let result = this.lenght - currentLenght;
        this.lenght = result < 0 ? 0 : result;
    }

    increase(currentLenght) {
        this.lenght += currentLenght;
    }

    toString() {
        if (this.lenght === 0) {
            return '...'
        }

        if (this.word.length > this.lenght) {
            return `${this.word.slice(0, this.lenght)}...`
        }

        return this.word
    }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
