

function subString(string,output,i){
    if (i === string.length){
        console.log(output)
        return
    }
    subString(string,output+string[i],i+1)
    subString(string,output,i+1)
}

subString("ABC",'',0)