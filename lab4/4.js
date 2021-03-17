/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {
    let result_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]))
            result_arr = result_arr.concat(get1DArray(arr[i]));
        else
            result_arr.push(arr[i]);
    }
    return result_arr;
}

module.exports = get1DArray;