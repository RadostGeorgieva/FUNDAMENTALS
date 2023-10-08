function asciiPrint(char1, char2) {
    function smallest(char1, char2) {
        return Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    }
    function largest(char1, char2) {
        return Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
    }
    let result =[];
for(let i = smallest(char1, char2)+1; i<largest(char1, char2); i++) {
    result.push(String.fromCharCode(i));
}
console.log(result.join(' '));
}
asciiPrint('#',

':')