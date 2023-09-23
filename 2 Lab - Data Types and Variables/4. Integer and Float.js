function typeOfNumber(nmb1, nmb2, nmb3) {
    let result = (nmb1+nmb2+nmb3)%1 == 0 ? console.log(`${nmb1+nmb2+nmb3} - Integer`) : console.log(`${nmb1+nmb2+nmb3} - Float`); 
    
} 
typeOfNumber(1.1,2,3);