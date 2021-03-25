/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 * 
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */
function curry(f) {
    return function result(...args) {
        if (args.length < f.length) {
            return (...args1) => {
                return result.apply(null, args.concat(args1));
            }
        } else {
            return f.apply(null, args);
        }
    }
}

module.exports = curry;