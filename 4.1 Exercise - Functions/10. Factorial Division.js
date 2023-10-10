function factorial(num1, num2) {
console.log((calfact(num1)/calfact(num2)).toFixed(2));
    function calfact(num) {
        { 
          if (num === 0)
         {
            return 1;
         }
          return num * calfact(num-1);
                 
        }
}
}
factorial(6,2);