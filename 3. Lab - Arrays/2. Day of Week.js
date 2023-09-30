function dayOfTheWeek(input) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"];
    if(input < 1 || input > 7) {
        console.log("Invalid day!");
    } else
    console.log(days[input-1]);
}
dayOfTheWeek(-1);