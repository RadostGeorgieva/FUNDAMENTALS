function piramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisAzuli = 0;
    let gold = 0;
    let step =0;
    i=base;
    while(i>2) {
        
        let innerArea = Math.pow(i-2,2);
        let area = i * i;
        stone += innerArea * increment;
        step++;
        i-=2;
        if (step!=0 && step % 5 == 0) {
            lapisAzuli += (area-innerArea) * increment;
        }else {
            marble += (area-innerArea) * increment;
        }
    }
    step++;
    if(i%2==0) {
        gold = Math.pow(i,2) * increment;

    }else { 
        gold = increment;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisAzuli)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(step*increment)}`)
}

piramid(11,0.75);

/*
Stone required: 165
 Marble required: 112 
 Lapis Lazuli required: 8
  Gold required: 1 
  Final pyramid height: 6 
  */