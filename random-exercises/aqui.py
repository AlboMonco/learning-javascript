def verifica(x,n):
    return True if x**3%n==1 else False


def c(n):
    count = 0
    for x in range(2,n):
        if verifica(x, n):
            count+=1
            if count>242:
                break
    return count


def main():
    soma = 0
    for i in range(10**11+1):
        if c(i) == 242:
            soma += i
    return soma


if __name__ == "__main__":
    #print(verifica(10,91))
    #print(c())
    print(main())