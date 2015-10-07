"use strict";

function calculate(){
    var result;
    var original = document.getElementById("original");
    var temp = original.value;
    var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
    
    var m = temp.match(regexp);     /*Cuando cumple la expresión regular*/
    
    if (m){
        var num = m[1];
        var type = m[2];
        num = parseFloat(num);      /*string --> float*/
        if (type=='c' || type=='C'){
            result = (num * 9/5)+32;
            result = result.toFixed(2) + " Farenheit";  /*toFixed --> Redondeo*/
        }
        else{
            result = (num -32)*5/9;
            result = result.toFixed(2) + " Celsius";
        }
        converted.innerHTML = result;
    }
    else{
        converted.innerHTML = "ERROR. Try something like '-4.2C' instead."
    }
}