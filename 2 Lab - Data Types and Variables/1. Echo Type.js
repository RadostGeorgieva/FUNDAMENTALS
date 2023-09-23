function param(input){
    console.log(typeof(input));
    if(typeof(input) == "string" || typeof(input) == "number") {
        console.log(input);
    } else { 
        console.log("Parameter is not suitable for printing");
    }
}

param("str");