
arr = [20,50,30,22,99,66,44]

def bubbleSort(arr,n):
    if n == 1:
        return

    for i in range(n):
        if arr[i] > arr[i+1]:
            arr[i],arr[i+1] = arr[i+1],arr[i]
    bubbleSort(arr,n-1)


bubbleSort(arr,len(arr)-1)

print(arr)