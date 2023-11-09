function solve(array) {
    let assocArr = [];
    class Student {
        constructor(student) {
            this.student = student;
            this.allgrade = 0;
            this.count = 0;
            this.finalGrade = 0;
        }
        addGrade(grade) {
            this.count += 1;
            this.allgrade += grade;
        }
        finalGradeAdd() {
            this.finalGrade = this.allgrade / this.count;
        }

    }
    for (let el of array) {
        let current = el.split(" ");
        let studentName =current.shift();
        if (!assocArr.hasOwnProperty(studentName)) {
            assocArr[studentName] = new Student();
        }
        let student = assocArr[studentName];
        for (let grade of current) {
            student.addGrade(Number(grade));
        }
        student.finalGradeAdd();

    }
    let entries = Object.entries(assocArr);
    entries.sort((a,b)=> a[0].localeCompare(b[0]));
    for (let [name, student] of entries) {
        console.log(`${name}: ${student.finalGrade.toFixed(2)}`);
    }
}

solve(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6'])