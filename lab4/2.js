/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    let reverse_str = str.split('').reverse().join('');
    if (reverse_str == str)
        return true;
    return false;
}

module.exports = isPalindrome;