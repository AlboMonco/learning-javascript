def u(k, r):
    return ((300-k)*r**(k-1))


def soma(n, r):
    soma=0
    for k in range (1,n+1):
        soma+=u(k, r)
    return soma

erro = 10**(-14)
resposta = -200000000000

def acha_valor():
    inferior = 1.0023221086327  
    superior = 1.0023221086328
    while superior - inferior > erro:
        r = (superior + inferior)/2
        s = soma(5000, r)
        if s < resposta:
            superior = r
        else:
            inferior = r
    return r

if __name__ == "__main__":
    #print(soma(5000, 1.0023221086327938))
    print(acha_valor())
# 1.0023221086327978
#1.002322108632878