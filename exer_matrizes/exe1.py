a = [
    [-10,4,1,6],
    [2,3,2,8]
]

b = [
    [1,8,4,-1],
    [0,6,3,-3]
]

c = [
    [a [i][j] + b[i][j] for j in range(4)]
    for i in range(2)
]
print(c)