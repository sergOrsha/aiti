"use strict";
const number = +prompt("Введите число");
if (number > 0) {
    alert("Положительное");
} else if (number < 0) {
    alert("Отрицательное");
} else if (number === 0) {
    alert("равно 0");
}