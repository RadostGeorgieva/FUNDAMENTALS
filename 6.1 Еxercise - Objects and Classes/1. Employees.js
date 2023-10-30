function solve(array){
    class Empoyee {
        constructor(name, number) {
            this.name = name;
            this.number = number;
        }
    }
    let employees = [];
    for(let i = 0; i < array.length; i++) {
        let employee = new Empoyee;
       
        employee.name = (array[i]);
        employee.number = array[i].length;
        employees.push(employee);
    }
    employees.forEach((i) => console.log(`Name: ${i.name} -- Personal Number: ${i.number}`));
}
solve(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal' ])