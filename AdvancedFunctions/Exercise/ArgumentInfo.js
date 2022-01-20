function solve() {
    let typeCounts = {};

    for (const arg of arguments) {
        console.log(`${typeof (arg)}: ${arg}`);
        if (!typeCounts[typeof (arg)]) {
            typeCounts[typeof (arg)] = 1;
        } else {
            typeCounts[typeof (arg)]++;
        }
    }
    Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a]).forEach(e => console.log(`${e} = ${typeCounts[e]}`));
}

solve('cat', 42, function () { console.log('Hello world!'); });