/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) {
    let to_arr = arr.map(el => { return el.to; })
    let result_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(to_arr.find(el => el == arr[i].from))) {
            result_arr.push(arr[i]);
            break;
        }
    }
    for (let i = 0, j = 0; i < arr.length - 1; i++, j++) {
        let ind = arr.findIndex(el => el.from == result_arr[j].to);
        result_arr.push(arr[ind]);
    }
    return result_arr;
}

module.exports = makeRoute;