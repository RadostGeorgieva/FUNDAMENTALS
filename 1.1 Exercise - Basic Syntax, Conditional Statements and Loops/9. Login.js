function password(input) {
    let userName = input[0];
    let password = "";
    for (let i = userName.length - 1; i >= 0; i--) {
        password += userName[i];
    }
    for (let j = 1; j <=4; j++) {
        let currentTry = input[j];
        if (currentTry == password) {
            console.log(`User ${userName} logged in.`);
            return ;
        } else if(j<4) {
            console.log("Incorrect password. Try again.");
        }
    }
    console.log(`User ${userName} blocked!`);
}
password(['sunny','rainy','cloudy','sunny','not sunny']);