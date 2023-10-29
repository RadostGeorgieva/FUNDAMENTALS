function solve(array) {
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
            }
    }
    let n = Number(array.shift());
    let songs = [];
    let typeFiltered = array.pop();
    for(let i = 0; i < n; i++)
    {
        let [type,name,time] = array[i].split('_');
        let song = new Song(type,name, time);
        songs.push(song);
    }
    if(typeFiltered == "all"){
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i)=> i.typeList == typeFiltered);
        filtered.forEach((i) => console.log(i.name));
    }
   
}
solve([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])
solve([3,

    'favourite_DownTown_3:14',
    
    'favourite_Kiss_4:16',
    
    'favourite_Smooth Criminal_4:01',
    
    'favourite']);