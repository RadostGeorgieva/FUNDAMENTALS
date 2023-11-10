function partyTime(array) {
    let vip = [];
    let normal = [];
    let partyPassed = false;
    for (let el of array) {
        if (el != "PARTY" && partyPassed == false) {
            let isDigit = parseInt(el[0]);
            if (!isNaN(isDigit)) {
                vip.push(el)
            } else {
                normal.push(el)
            }
        } else if (el == "PARTY") {
            partyPassed = true;
        } else {
            let isDigit = parseInt(el[0]);
            if (!isNaN(isDigit) && vip.indexOf(el) != -1) {
                vip.splice(vip.indexOf(el), 1);
            } else if (isNaN(isDigit) && normal.indexOf(el) != -1) {
                normal.splice(normal.indexOf(el), 1);
            }
        }
    }
    console.log(normal.length + vip.length);
    for (let el of vip) {
        console.log(el);
    }
    for (let el of normal) {
        console.log(el);
    }
}


partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'])