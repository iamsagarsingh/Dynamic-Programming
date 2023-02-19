function sumofel(arr){
    if(arr.length == 1){
        return arr[0]
    }
    return arr[0] + sumofel(arr.slice(1))
}

console.log(sumofel([1,2,3,4]))