/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    let word_arr = str.split(' ');
    let res = "";
    for (let i = 0; i < word_arr.length; i++) {
        res += word_arr[i][0].toUpperCase() + word_arr[i].slice(1);
        if (i != word_arr.length - 1)
            res += ' ';
    }
    return res;
}

module.exports = capitalize;