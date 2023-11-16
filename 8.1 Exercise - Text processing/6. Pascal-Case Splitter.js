function solve(str) {
    let finalStr = str.split(/(?=[A-Z])/);
    console.log(finalStr.join(", "));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')