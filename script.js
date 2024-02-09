let currentvalue = "";
let display = document.querySelector('.display');
display.value = currentvalue;

let btn1 = document.querySelector('.btn-1');
btn1.addEventListener('click', function() {
    currentvalue += "1";
    display.value = currentvalue;
});

let btn2 = document.querySelector('.btn-2');
btn2.addEventListener('click', function() {
    currentvalue += "2";
    display.value = currentvalue;
});

let btn3 = document.querySelector('.btn-3');
btn3.addEventListener('click', function() {
    currentvalue += "3";
    display.value = currentvalue;
});

let btn4 = document.querySelector('.btn-4');
btn4.addEventListener('click', function() {
    currentvalue += "4";
    display.value = currentvalue;
});

let btn5 = document.querySelector('.btn-5');
btn5.addEventListener('click', function() {
    currentvalue += "5";
    display.value = currentvalue;
});

let btn6 = document.querySelector('.btn-6');
btn6.addEventListener('click', function() {
    currentvalue += "6";
    display.value = currentvalue;
});

let btn7 = document.querySelector('.btn-7');
btn7.addEventListener('click', function() {
    currentvalue += "7";
    display.value = currentvalue;
});

let btn8 = document.querySelector('.btn-8');
btn8.addEventListener('click', function() {
    currentvalue += "8";
    display.value = currentvalue;
});

let btn9 = document.querySelector('.btn-9');
btn9.addEventListener('click', function() {
    currentvalue += "9";
    display.value = currentvalue;
});

let btn0 = document.querySelector('.btn-0');
btn0.addEventListener('click', function() {
    currentvalue += "0";
    display.value = currentvalue;
});

let btnC = document.querySelector('.btn-C');
btnC.addEventListener('click', function() {
    currentvalue = "";
    display.value = currentvalue;
});

let btndot = document.querySelector('.btn-dot');
btndot.addEventListener('click', function() {
    currentvalue += "."
    display.value = currentvalue;
});

let btnplus = document.querySelector('.btn-plus');
btnplus.addEventListener('click', function() {
    currentvalue += "+";
    display.value = currentvalue;
});

let btnminus = document.querySelector('.btn-minus');
btnminus.addEventListener('click', function() {
    currentvalue += "-";
    display.value = currentvalue;
});

let btnmultiply = document.querySelector('.btn-multiply');
btnmultiply.addEventListener('click', function() {
    currentvalue += "*";
    display.value = currentvalue;
});

let btndivide = document.querySelector('.btn-divide');
btndivide.addEventListener('click', function() {
    currentvalue += "/";
    display.value = currentvalue;
});

let btnmod = document.querySelector('.btn-mod');
btnmod.addEventListener('click', function() {
    currentvalue += "%";
    display.value = currentvalue;
});

let btnresult = document.querySelector('.btn-result');
btnresult.addEventListener('click', function() {
    let result = 0;
    result = eval(currentvalue);
    display.value = result;
});