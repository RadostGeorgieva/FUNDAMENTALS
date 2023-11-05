function solve(array){
    let arr = [];
    for(let i = 0; i < array.length; i ++) {
        let data = array[i].split([` / `]);
        let name = data[0];
        let lvl = Number(data[1]);
        let items  = data[2];
        let person = {name, lvl, items};
        arr.push(person);
        
    }
    arr.sort((a, b) => a.lvl - b.lvl);
    for(obj of arr) {
        console.log(`Hero: ${obj.name}`);
        console.log(`level => ${obj.lvl}`);
        console.log(`items => ${obj.items}`);
    }

  }
  solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )