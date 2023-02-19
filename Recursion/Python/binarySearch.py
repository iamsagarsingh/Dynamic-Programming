def binarySearch(arr,s,e,k):
    mid = (s+e)//2
    if mid >= len(arr):
        return -1
    elif arr[mid] == k:
        return mid+1
    elif arr[mid] < k:
        return binarySearch(arr, mid+1, e, k)
    elif arr[mid] > k:
        return binarySearch(arr, s, mid-1, k)
    
print(binarySearch([1,2,3,4], 0, 4, 9))