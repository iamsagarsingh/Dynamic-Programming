arr = [34,23,12,88,55,43]

function bubbleSort(arr,n){
    if(n===1){
        return
    }
    for(let i=0;i<=n-1;i++){
        if(arr[i]>arr[i+1]){
            const temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
    }
    bubbleSort(arr,n-1)
}

bubbleSort(arr,arr.length - 1)

console.log(arr);