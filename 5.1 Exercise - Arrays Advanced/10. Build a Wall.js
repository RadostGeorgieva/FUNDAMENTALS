function buildingWall(array) {
    let totalConcrete = 0;
    let cost = 0;
    array.map(Number);
    let concreteArray = [];

    while (array.some(el => el < 30)) {
        let dailyConcrete = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] < 30) {
                array[i] += 1;
                totalConcrete += 195;
                dailyConcrete += 195;
            }
        }
        concreteArray.push(dailyConcrete);
    }
    cost = totalConcrete * 1900;
    console.log(concreteArray.join(', '));
    console.log((cost + " pesos"));
    
}
buildingWall([21, 25, 28]);
