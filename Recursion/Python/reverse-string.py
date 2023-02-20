
st = list('hello')

def reverseString(arr,i,j):
    if i>j:
        return
    arr[i],arr[j] = arr[j],arr[i]
    reverseString(arr, i+1, j-1)

reverseString(st, 0, len(st)-1)

print(''.join(st))
