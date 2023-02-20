
function power(a,b){
    if(b===1){
        return a
    }
    const ans = power(a,parseInt(b/2))
    if(b%2 === 0){
        return ans*ans
    }
    else{
        return a*ans*ans
    }
}

console.log(power(3,4));