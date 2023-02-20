str = list('racecar')

def checkPalindrome(arr,i,j):
    if i>j:
        return True
    
    if arr[i] != arr[j]:
        return False

    return checkPalindrome(arr, i+1, j-1)


print(checkPalindrome(str, 0, len(str)-1))