function solve(area, vol, input) {
    let object = JSON.parse(input);

    function calc(obj){
        let areaObj = area.call(obj);
        let volumeObj = vol.call(obj);
        return {area: areaObj, volume: volumeObj}
    }
    return object.map(calc);
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`

