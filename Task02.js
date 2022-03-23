'use strict';
//Вторая задача:
//Напишите функцию, которая принимает строку и возвращает модифицированную строку
//Строка начинается с большой буквы, остальные буквы маленькие
//Пример:  "привет Мир" => "Привет мир"

var stroka = prompt('Введите текст');
    
    function myFunction(str) {
        return str[0].toUpperCase() + str.slice(1);
    }   
    alert(myFunction(stroka.toLowerCase()));