/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    let num_str = str.split(/[\s,\]]+/);
    let min_num = Number.MAX_SAFE_INTEGER;
    let max_num = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < num_str.length; i++) {
        let num = parseFloat(num_str[i]);
        if (num < min_num)
            min_num = num;
        if (num > max_num)
            max_num = num;
    }
    let res = {
        min: min_num,
        max: max_num
    }
    return res;
}

module.exports = getMinMax;