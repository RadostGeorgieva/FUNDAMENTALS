function solve(array) {
    let data = [];
    let ordered = [];
    for (let el of array) {
        if (el === "Ave Cesar") {
            let validData = Object.entries(data).filter(([name, skills]) => skills instanceof Map);
            for (let [name, skills] of validData) {
                let sumOfValues = Array.from(skills.values()).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                ordered.push({ name, sumOfValues,skills});
            }
            ordered.sort((a, b) => {
                if (a.sumOfValues !== b.sumOfValues) {
                    return b.sumOfValues - a.sumOfValues; // Order by sumOfValues descending
                }
                return a.skills - b.skills; 
            });
            for (let gladiator of ordered) {
                console.log(`${gladiator.name}: ${gladiator.sumOfValues} skill`);
                let sortedSkills = Array.from(gladiator.skills).sort((a,b)=> b[1]-a[1]);
                for (let [skill, value] of sortedSkills) {
                    console.log(`- ${skill} <!> ${value}`);
                }
            
            }
            
        }
        let current = el.split(" ");
        if (current[1] == 'vs') {
            let gl1 =current[0];
            let gl2 = current[2];
            if(data.hasOwnProperty(gl1) && data.hasOwnProperty(gl2)) {
                let gl1Skills = Array.from(data[gl1].keys());
                let gl2Skills = Array.from(data[gl2].keys());
                for (let item of gl1Skills) {
                    if (gl2Skills.includes(item)) {
                        let gl1Amount = data[gl1].get(item);
                        let gl2Amount = data[gl2].get(item);
                        if(gl1Amount>gl2Amount){
                            delete data[gl2]
                            break;
                        } else if(gl1Amount<gl2Amount){
                            delete data[gl1]
                            break;
                        }

                    }
                }
            
            }
        }
        else {
            let gladiator = current[0];
            let skill = current[2];
            let amount = Number(current[4]);
            if(!data.hasOwnProperty(gladiator)){
                data[gladiator] = new Map();
                data[gladiator].set(skill,amount);
            } else if(!data[gladiator].has(skill)){
                data[gladiator].set(skill,amount);
            } else {
                let currentAmount = data[gladiator].get(skill);
                if(currentAmount<amount){
                data[gladiator].set(skill,amount);
                }
            }
        }
    }

}
solve([ 'Peter -> Duck -> 400', 'Julius -> Shield -> 150', 'Gladius -> Heal -> 200', 'Gladius -> Support -> 250', 'Gladius -> Shield -> 250', 'Peter vs Gladius', 'Gladius vs Julius', 'Gladius vs Maximilian', 'Ave Cesar' ])