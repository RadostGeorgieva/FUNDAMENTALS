function solve(array) {
    let data = [];
    for (let el of array) {
        let [name, city, price] = el.split(" > ");
        if (!data.includes(name)) {
          data[name][city] = Number(price)
            }

    }
}

solve([

    "Bulgaria > Sofia > 500",

    "Bulgaria > Sopot > 800",

    "France > Paris > 2000",

    "Albania > Tirana > 1000",

    "Bulgaria > Sofia > 200"

])