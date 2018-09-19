
function operationCalc(){
    
    var input1 = +(document.getElementById("input-1").value);
    var input2 = +(document.getElementById("input-2").value);
    var operator = +(document.getElementById("menu").value);

    var result = 0;

    switch (operator) {
        case 1: 
            result = input1 + input2;
            document.getElementById("calc").innerHTML = result;
            break;
        case 2:
            result = input1 - input2;
            document.getElementById("calc").innerHTML = result;
            break;
        case 3:
            result = input1 * input2;
            document.getElementById("calc").innerHTML = result;
            break;
        case 4:
            result = input1 / input2;
            document.getElementById("calc").innerHTML = result.toFixed(2);
            break;
        case 5:
            result = input1 % input2;
            document.getElementById("calc").innerHTML = result;
            break;
        default:
            document.getElementById("calc").innerHTML = "Error Occured";
    }    

}