//'use strict';
//Четвертая  задача:

const total = +prompt('Общая сумма корзины');
const product = +prompt('Количество товаров в корзине');
var promo = prompt('Промокод');
const discount1 = 0;
const discount2 = 0;
const discount3 = 0;
    
    function calculate(total, product, promo, discount1, discount2, discount3) {
        if (product > 10) {
            discount1 = total / 100 * 3;     
        } 
        if (total > 30000) {
            discount2 = (total - 30000) / 100 * 15;
        } 
        if (promo == "METHED") {
            discount3 = total / 100 * 10;
        } 
        if (promo == "G3H2Z1" && total - discount1 - discount2 < 2000) {
            discount3 = 500;
        }

        return total-discount1-discount2-discount3;
    }   
    console.log(calculate(total, product, promo, discount1, discount2, discount3));