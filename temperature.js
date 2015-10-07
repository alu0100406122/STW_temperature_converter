"use strict";

function calculate(){
    var result;
    var original = document.getElementById("");
    var temp = original.value;
    var regexp = ;
    
    var m = temp.match();   /*Cuando cumple la expresión regular*/
    
    if (m){
        var num = ;
        var type = ;
        num = parseFloat(num);
        if (type=='c' || type=='C'){
            result = (num * 9/5)+32;
            result = ;
        }
        else{
            result = (num -32)*5/9;
            result = ;
        }
        converted.innerHTML = result;
    }
    else{
        converted.innerHTML = "ERROR. Try something like '-4.2C' instead"
    }
}