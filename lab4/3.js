/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let result_str = str.split('');
    for (let i = 0; i < result_str.length; i++) {
        let count = 1;
        let j = i;
        while (result_str[j + 1] === result_str[j]) {
            count++;
            if (j != i) {
                result_str[j + 1] = '';
            }
            j++;
        }
        if (count != 1)
            result_str[i++ + 1] = count.toString();
    }
    return result_str.join('');
}

module.exports = rle;