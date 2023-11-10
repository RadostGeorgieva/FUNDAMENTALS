function solve(array) {
    let data = {};
    for(el of array) {
        let [company, employee] = el.split(" -> ");
        if(!data.hasOwnProperty(company)){
            data[company] =new Set;
        }
        data[company].add(employee);
    }
    let sorted = Object.entries(data).sort((a,b)=>(a[0].localeCompare(b[0])))
    for(let [company, employees] of sorted) {
        console.log(company);
        for(let employee of employees){
            console.log(`-- ${employee}`);
        }
    }
}
solve([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])