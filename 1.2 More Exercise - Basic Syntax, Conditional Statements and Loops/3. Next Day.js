function nextDay(year, month, day){{

let date = new Date(year,month-1,day);
date.setDate(date.getDate()+1);
const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString()}-${date.getDate().toString()}`;
console.log(formattedDate);
    }
}
nextDay(2020, 3, 24)