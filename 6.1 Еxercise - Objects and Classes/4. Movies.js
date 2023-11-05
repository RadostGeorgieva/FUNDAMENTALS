function solve(array) {
    let movies = [];
    for (let i = 0; i < array.length; i++) {
        let current = array[i].split(' ');
        if (current[0] == "addMovie") {
            current.shift();
            let name = current.join(' ');
            let director = 0;
            let date = 0;
            let movie = { name, director, date };
            movies.push(movie);
        } else {
            if (current.indexOf("directedBy") != -1) {
                let name = array[i].slice(0, array[i].indexOf("directedBy")-1);
                let director = array[i].slice(array[i].indexOf("directedBy")+11);
                for (let obj of movies) {
                    if (obj.name == name) {
                        obj.director = director;
                    }
                }
            } else if (current.indexOf("onDate") != -1) {
                let name = array[i].slice(0, array[i].indexOf("onDate")-1);
                let date = array[i].slice(array[i].indexOf("onDate")+7);
                for (let obj of movies) {
                    if (obj.name == name) {
                        obj.date = date;
                    }
                }

            }
        }
    }
    for(let obj of movies) {
        if(obj.director!=0 && obj.date !=0) {
           console.log((JSON.stringify(obj)));
        }
    }
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)