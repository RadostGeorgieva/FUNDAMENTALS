function gladiator(fights,helmetPrice,swordPrice,shieldPrice,armorPrice) {
    let trashedHelmet =0;
    let trahedH = false;
    let trashedSword =0;
    let trashedS = false;
    let trashedShield =0;
    let price =0;
    let trashedArmor =0;
    for (let i = 1; i<=fights;i++) {
        if(i%2==0) {
            trahedH = true;
            trashedHelmet++;
        }
        if(i%3==0) {
            trashedS = true;
            trashedSword++;
        }
        if(trahedH == true && trashedS == true) {
            trashedShield++;
            if (trashedShield!=0 && trashedShield%2==0) {
                trashedArmor++;
            }
        }
        trahedH =false;
        trashedS=false
    }
    price = trashedHelmet * helmetPrice + trashedSword * swordPrice + trashedShield * shieldPrice + trashedArmor * armorPrice;
    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
}
gladiator(7,

    2,
    
    3,
    
    4,
    
    5)