'use strict';
//Третья задача:
//Напишите функцию, которая принимает строку и возвращает обратную строку
//Пример: "Привет мир" => "рим тевирП"

var stroka = prompt('Введите текст');
    
    function myFunction(str) {
        return str.split("").reverse().join("");
    }   
    alert(myFunction(stroka));