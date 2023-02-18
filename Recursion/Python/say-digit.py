

def sayDigit(n,arr):
    if n==0:
        return 

    digit = n%10;
    n = n//10

    sayDigit(n, arr)
    print(arr[digit], end=" ")



arr = ["zero","one","two","three","four","five","six","seven","eight","nine"]

sayDigit(123, arr)