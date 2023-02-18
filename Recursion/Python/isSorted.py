
def isSorted(arr):
    if len(arr) == 1:
        return True
    
    elif arr[0]>arr[1]:
        return False
    
    arr = arr[1:]
    return isSorted(arr)


print(isSorted([1,2,4,5,3]))

