def power(a,b):
    if b==1:
        return a

    ans = power(a,b//2)

    if b%2 == 0:
        return ans*ans

    else:
        return a*ans*ans


print(power(3, 11))
