function replace(str1,character,str2) {
    let result = "";
    for (let i = 0; i<str1.length; i++){
        if(str1[i] == "_") {
            result+=character;
        } else {
            result+=str1[i];
        }
    }
    if (result == str2) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
} 
replace('Str_ng', 'i',

'String')