function movingTarget(input) {
    let array = input.shift().split(" ").map(Number);
    for(let i = 0; i < input.length; i++) {
        let command = input[i]
        if(command  == "End") {
            console.log(array.join('|'));
        } else {
           command = command.split(" ");
        } if( command[0] == "Shoot" && Number(command[1])>=0 && Number(command[1])< array.length) {
            array[Number(command[1])]-=Number(command[2]);
            if(array[Number(command[1])]<=0) {
                array.splice(command[1],1);
            }
        } else if(command[0] == "Add"){
            if(Number(command[1])>=0 && Number(command[1])< array.length) {
                array.splice(Number(command[1]),0,Number(command[2]));
            } else{
                console.log("Invalid placement!");
            }
        } else if(command[0] == "Strike") {
            if(Number(command[1])-Number(command[2])<0 ||Number(command[1])+Number(command[2]) > array.length) {
                console.log(`Strike missed!`);
            } else{
                let start = Number(command[1])-Number(command[2]);
                let amount = (Number(command[2]) * 2)+1;
                array.splice(start,amount);
            }
        }
    }
}movingTarget((["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])
)
movingTarget((["1 2 3 4 5",
"Strike 0 1",
"End"])
)