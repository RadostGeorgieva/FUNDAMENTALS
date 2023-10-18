function guineaPig(arrayInGrams) {
    let array = arrayInGrams.map(el => el*1000)
    let [food, hay, cover, weigth] = array;
   let oneTird = weigth/3;
   let day = 0;
    for (let i = 1; i <= 30; i++) {
        day++;
        food-=300;
        if (food<= 0) {
            console.log("Merry must go to the pet store!");
            return;
        }
        if(i%2==0) {
        let hayGiven = 0.05*food;
        hay-=hayGiven;
        }
        if(day % 3 == 0)  {
            cover-=oneTird;
        }
    if (hay<=0 || food <=0 || cover<=0) {
        console.log("Merry must go to the pet store!");
        return;
    }
}
if (hay<=0 || food <=0 || cover<=0) {
    console.log("Merry must go to the pet store!");
    return;
}
console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`);

}
//guineaPig([10,5, 5.2, 1])
guineaPig([1,1.5,3,1.5])