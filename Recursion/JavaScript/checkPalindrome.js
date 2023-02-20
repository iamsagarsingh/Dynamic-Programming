let str = 'racecar'

function checkPalindrome(arr,i,j){
    if(i>j){
        return true
    }

    if(arr[i] !== arr[j]){
        return false
    }

    return checkPalindrome(arr,i+1,j-1);
}

console.log(checkPalindrome(str,0,str.length-1));