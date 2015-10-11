"use strict";

function calculate(){
    var result;
    var original = document.getElementById("original");
    var temp = original.value;
    
    //var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;   //primera version
    var regexp = /([-+]?\d+(?:\.\d*)?)(?:[eE]([-+]?\d+))?\s*([fFcC])/;
    var m = temp.match(regexp);     /*Cuando cumple la expresión regular*/
    
    if (m){
        var num = m[1];
        var exp = m[2];
        var type = m[3];
        num = parseFloat(num);      /*string --> float*/
        exp = parseInt(exp);
        if(m[2]!==undefined){
            var i,j;
            i = 1; j = 10;
            if(exp<0){
                exp = -exp;
                while(i < exp){
                    j = j * 10;
                    i++;}
                if(j !== 0){
                  num = num/j;
                }}
            else{
              while(i < exp){
                j = j * 10;
                i++;
              }
            if(j !== 0)
              num = num*j;
            }}
        
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