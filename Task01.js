'use strict';
//Первая задача:
//Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях
//1 евро = 1.2 доллара,
//1 доллар = 73 рубля.

    const euro = +prompt('Евро');
//вариант 1
    Convertor();
    function Convertor() {
        console.log(euro + ' евро = ', euro * 1.2 * 73, ' рублей');
    };

    
//вариант 2    
    Convertor2(euro);
    function Convertor2(euro) {
        const obmen = euro * 1.2 * 73;
        console.log(obmen);
    };