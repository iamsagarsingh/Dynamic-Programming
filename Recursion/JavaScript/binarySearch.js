function binarySearch(arr,s,e,k){
    const mid = parseInt((s+e)/2)
    if(mid >= arr.length){
        return -1
    }
    else if (arr[mid] === k ){
        return mid+1
    }
    else if (arr[mid] < k){
        return binarySearch(arr,mid+1,e,k)
    }
    else{
        return binarySearch(arr,s,mid-1,k)
    }
}

console.log(binarySearch([1,2,3,4],0,4,2))