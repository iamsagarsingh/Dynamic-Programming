
function isSorted(arr){
    if(arr.length === 1){
        return true
    }

    else if(arr[0]>arr[1]){
        return false
    }

    arr = arr.slice(1)
    return isSorted(arr)
}

console.log(isSorted([1,2,4,3]));