function calculator(numOne, numTwo, operatorStr) {
    let operator = "";
    switch(operatorStr) {
        case "multiply": operator = `${numOne} * ${numTwo}`; break;
        case "divide": operator = `${numOne} / ${numTwo}`; break;
        case "add": operator =`${numOne} + ${numTwo}`; break;
        case "subtract": operator =`${numOne} - ${numTwo}`; break;
    } 
    let result = (operator) => eval(operator);
    console.log((result(operator)));
}
calculator(5,5, 'multiply');