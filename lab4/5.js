/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    let open_set = ['[', '(', '<'];
    let close_set = [']', ')', '>'];
    let arr = str.split('');
    for (let i = 0; i < arr.length - 1; i++) {
        if (open_set.find(item => item === arr[i])) {
            let open_count = 0;
            while (open_set.find(item => item === arr[i]) && i < arr.length - 1) {
                i++;
                open_count++;
            }
            let j = 1;
            let len = -1;
            while (open_count >= j && i < arr.length) {
                len += 2;
                if (close_set.findIndex(item => item === arr[i]) != open_set.findIndex(item => item === arr[i - len]))
                    return false;
                j++;
                i++;
            }
        }
        if (close_set.find(item => item === arr[i]) && i < arr.length)
            return false;
        i--;
    }
    return true;
}

module.exports = checkBrackets;