function solve(str) {
    let array = str.split(" ");
    let alhabetUpper = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
    let alhabetlower = "abcdefghijklmnopqrstuvwxyz".toLowerCase().split('');
    let total = 0;
    for(item of array) {
        let first = item.substring(0,1);
        let last = item.substring(item.length-1);
        let num = Number(item.substring(1,item.length-1));
        if(alhabetUpper.includes(first)){
            num = num/(alhabetUpper.indexOf(first)+1);
        }else  if(alhabetlower.includes(first)){
            num = num*(alhabetlower.indexOf(first)+1);
        }
        if(alhabetUpper.includes(last)){
            num = num-(alhabetUpper.indexOf(last)+1);
        }else  if(alhabetlower.includes(last)){
            num = num+(alhabetlower.indexOf(last)+1);
        }
        total+=num;

    }
    console.log(total.toFixed(2));
}
solve('A12b s17G')
solve('P34562Z q2576f H456z')