
let str = [...'hello']


function reverseStr(arr,i,j){
    if(i>j){
        return
    }
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    reverseStr(arr,i+1,j-1)
}

reverseStr(str,0,str.length-1)

console.log(str.join(''))