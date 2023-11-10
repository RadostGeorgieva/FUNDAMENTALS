function solve(array) {
    let data = {};
    for(let i = 0; i < array.length; i+=2){
        let resource = array[i];
        let quantity = Number(array[i+1]);
        if(!data.hasOwnProperty(resource)){
            data[resource]=quantity;
        }else{
            data[resource]+=quantity;
        }
    }
    let entries = Object.entries(data);
    for(let [name, quanityty] of entries) {
        console.log(`${name} -> ${quanityty}`);
    }
}
solve([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])