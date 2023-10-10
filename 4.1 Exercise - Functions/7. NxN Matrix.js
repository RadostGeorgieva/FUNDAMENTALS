function matrix(n) {
    let m = '';
    for(let i = 1; i<=n; i++){
        for(let j = 1; j<=n; j++) {
            m+= n + " ";
        }
        console.log(m);
        m="";
    }
}
matrix(7)