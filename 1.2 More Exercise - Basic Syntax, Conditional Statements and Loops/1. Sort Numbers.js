function sort(n1, n2, n3){
    let largest =Math.max(n1,n2,n3);
    let smallest =Math.min(n1,n2,n3);
    let mid = 0;
    if((largest==n1 || largest==n2) && (smallest== n1 || smallest== n2)){
        mid = n3;
    }else if((largest==n2 || largest==n3) && (smallest== n2 || smallest== n3)){
        mid = n1;
    }else if((largest==n1 || largest==n3) && (smallest== n1 || smallest== n3)){
        mid = n2;
    }
    console.log(largest);
    console.log(mid);
    console.log(smallest);
}
sort(2,0,0);