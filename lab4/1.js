/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let sorted_arr = arr.map(el => {
        return el.toLowerCase().split('').sort().join('');
    })
    let result_arr = [];
    for (let i = 0; i < arr.length; i++) {
        let anagrams_arr = [];
        if (arr[i] != '') {
            anagrams_arr.push(arr[i]);
            arr[i] = '';
        }
        for (let j = i + 1; j < arr.length; j++) {
            if (sorted_arr[j] == sorted_arr[i]) {
                if (arr[j] != '') {
                    anagrams_arr.push(arr[j]);
                    arr[j] = '';
                }
            }
        }
        if (anagrams_arr.length != 0)
            result_arr.push(anagrams_arr);
    }
    return result_arr;
}

module.exports = getAnagramms;