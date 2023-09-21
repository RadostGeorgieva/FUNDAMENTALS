function rounding(number, p){
    if(p>=15) {
    console.log(parseFloat(number.toFixed(15)));
    }else {
        console.log(parseFloat(number.toFixed(p)));
    }
}
rounding(10.5,3)