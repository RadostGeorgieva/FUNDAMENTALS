function gladiator(array) {
    let items = array[0].split(" ");
    for (let i = 1; i < array.length; i++) {
        let [command, item] = array[i].split(" ");
        let found = items.indexOf(item);
        if (command == "Buy" && found == -1) {
            items.push(item);
        } else if (command == "Trash" && found != -1) {
            items.splice(found, 1);
        } else if (command == "Repair" && found != -1) {
            items.splice(found, 1);
            items.push(item);
        } else if (command == "Upgrade") {
            item = item.split("-");
            found = items.indexOf(item[0]);
            if(found!=-1){
               let current = `${item[0]}:${item[1]}`;
            items.splice(found+1,0,current);
            }
        }
       
    }
    console.log(items.join(" "));
}
    gladiator(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
    gladiator(['SWORD Shield Spear','Trash Bow','Repair Shield', 'Upgrade Helmet-V'])