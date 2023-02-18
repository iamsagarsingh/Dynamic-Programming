
function sayDigit(num,arr){
    if(num === 0){
        return
    }

    const digit = num%10
    num = parseInt(num/10)

    sayDigit(num,arr)

    // console.log(arr[digit])
    process.stdout.write(arr[digit]+" ")    
}

let arr = ["zero","one","two","three","four","five","six","seven","eight","nine"]


sayDigit(123,arr)