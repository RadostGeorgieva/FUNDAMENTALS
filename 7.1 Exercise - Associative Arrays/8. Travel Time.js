function solve(array) {
    let countries = [];
    for (let el of array) {
        let [name, city, price] = el.split(" > ");
        if (!countries.hasOwnProperty(name)) {
            countries[name] = new Map;
            countries[name].set(city,Number(price));
            }  
        else {
        if (countries[name].has(city)) {
                let existingPrice = countries[name].get(city);
                if (parseInt(price) < existingPrice) {
                    countries[name].set(city, Number(price));
                }
            }
        else {
            countries[name].set(city,Number(price));
        }
        }
    }
    let sortedCountries  = Object.keys(countries).sort((a,b) => (a.localeCompare(b)));
   for (let country of sortedCountries) {
        let sortedCities = Array.from(countries[country]).sort((a, b) => a[1] - b[1]);
        console.log(`${country} -> ${sortedCities.map(entry => entry.join(' -> ')).join(' ')}`);
    }
}

solve([
    "Bulgaria > Sofia > 25000",
    "aaa > Sofia > 1",
    "aa > Orgrimar > 0",
    "Albania > Tirana > 25000",
    "zz > Aarna > 25010",
    "Bulgaria > Lukovit > 10"

])