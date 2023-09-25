function chess(n) {
    console.log(`<div class="chessboard">`);
    let first = "black";
    let second = "white";
    for (let i = 0; i < n; i++) {
        console.log(`   <div>`);
        for (let j = 0; j < n; j++) {
            
            if (j % 2 == 0) {
                console.log(`       <span class="${first}"></span>`);
            } else {
                console.log(`       <span class="${second}"></span>`);
              
            }
           
        }
        console.log(`   </div>`);
        if (n % 2 == 0) {
            let third = first;
        first = second;
        second = third;
         }else{
            if(i%2==0){
            first ="white";
             second = "black";
            }else {
                 first = "black";
                 second = "white";
            }
        
    }
    }
    console.log(`   </div>`);
}
chess(6);