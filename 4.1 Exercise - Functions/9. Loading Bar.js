function loadingBar(n) {
    function bar(n) {
        let str = "";
        for (let i = 0; i < 10; i++) {
            if (i < n[0]) {
                str += '%';
            }
            else
                str += '.'
        }
        return str;

    }
    if (n != 100){
        console.log(`${n}% [${bar(String(n))}]`);
        console.log(`Still loading...`);
    }
    else {
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    }
}
loadingBar(100)