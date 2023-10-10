function passwordValidator(password) {
    let validaPass = true;
    if (!lengthPassword(password)) {
        console.log("Password must be between 6 and 10 characters");
        validaPass = false;
    }
    if (notDigitOrLetter(password)) {
        console.log(`Password must consist only of letters and digits`);
        validaPass = false;
    }
    if (lessDigits(password)) {
        console.log(`Password must have at least 2 digits`);
        validaPass = false;
    }
    if(validaPass) {
        console.log(`Password is valid`);
    }
    
    function lengthPassword(password) {
        if (password.length < 6 || password.length > 10) {
            return false;
        }
        return true;
    }
    function notDigitOrLetter(password) {
        for (let i = 0; i < password.length; i++) {
            if (password.charCodeAt(i) >= 48 && password.charCodeAt(i)  <= 57) {
                continue;
            }
            else if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
                continue;
            }
            else if(password.charCodeAt(i) >= 97 && password.charCodeAt(i)  <= 122) {
                continue;
            }
            else {
                return true;
            }

        }
        return false;
    }
    function lessDigits(password) {
        let count =0;
        for (let i = 0; i < password.length; i++) {
           
            if (!isNaN(password[i]))
            {
                count++;
            }
        }
        if(count>=2) 
        return false
    else
    return true;
    }
}
passwordValidator('Pa$s$s$$$$$');
