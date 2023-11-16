function solve(str) {
let array = str.split("\\");
let nameAndExtention = array[array. length-1];
let dot =nameAndExtention.lastIndexOf(".");
let extention = nameAndExtention.substring(dot+1)
let name = nameAndExtention.substring(0,dot);
console.log(`File name: ${name}`);
console.log(`File extension: ${extention}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx')