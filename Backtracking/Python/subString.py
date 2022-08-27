def subString(string,output,i):
    if i == len(string):
        print(output)
        return
    subString(string, output+string[i], i+1)
    subString(string, output, i+1)


subString("abcd",'',0)