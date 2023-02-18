def sumOfEl(arr):
    if len(arr)==1:
        return arr[0]
    return arr[0] + sumOfEl(arr[1:])


print(sumOfEl([1,2,3,4,5]))
