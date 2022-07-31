"use strict"

function isNumber(x){
    return !isNaN(parseFloat(x)) && isFinite(x);
}

let age;
let res;
const PXINEM = 16;
while(true){
    age = prompt("Сколько тебе лет?");
    if (!isNumber(age)){
        alert("Введите корректное число");
        continue;        
    }
    if (confirm("Ты мальчик?")){
        alert("Эй, парень, тебе " + age + "!");
    }
    else{
        alert("Привет, подруга, тебе " + age + "!");
    }
    break;
}
while(true){
    res = prompt("Введите количество пикселей");
    if (!isNumber(res)){
        alert("Введите корректное число");
        continue;        
    }    
    alert(res + " пикселей соответствуют " + (res / PXINEM) + " em");
    break;
}