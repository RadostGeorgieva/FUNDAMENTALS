function solve(array, entryPoint, kindOfItem) {
    let rightArray = array.slice(entryPoint + 1);
    let leftArray = array.slice(0, entryPoint);
    let leftSum = 0;
    let rightSum = 0;
    let n = array[entryPoint];
    if (kindOfItem == "expensive") {
        leftSum = bigger(leftArray, n)
        rightSum = bigger(rightArray, n)
    } else if (kindOfItem == "cheap") {
        leftSum = smaller(leftArray, n)
        rightSum = smaller(rightArray, n)
    }
    if (rightSum > leftSum) {
        console.log(`Right - ${rightSum}`);
    } else if (rightSum <= leftSum) {
        console.log(`Left - ${leftSum}`);
    }

    function bigger(arr, n) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= n) {
                sum += arr[i];
            }

        }
        return sum;
    }
    function smaller(arr, n) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < n) {
                sum += arr[i];
            }
        }
        return sum;
    }
}
//solve([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
solve([1, 5, 1], 1, "cheap")
solve([5, 10, 12, 5, 4, 20],
    3,
    "cheap")
