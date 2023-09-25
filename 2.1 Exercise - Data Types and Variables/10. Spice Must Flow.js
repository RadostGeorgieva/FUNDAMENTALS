function mining(spice) {

    let dayCounter = 0;
    let mined = 0;

    while (spice >= 100) {

        dayCounter++;

        if (spice >= 26) {

            mined += (spice - 26);
        } else {
            break;
        }
        spice-=10;
    }
    if (mined >= 26) {

        mined -=  26;
    }
    console.log(dayCounter);
    console.log(mined);
}
mining(450);