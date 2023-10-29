function solve(array) {
    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        } 
    speak(){
        console.log(`${this.name}, age ${this.age} says Meow`);
    }  
 }
 for(let i = 0; i < array.length; i++) {
    let [catName, catAge] = array[i].split(' ');
    let cat = new Cat(catName,catAge);
    cat.speak();
 }
}
solve(['Mellow 2', 'Tom 5']);