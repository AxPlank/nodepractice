testarr = [];

def test(arr):
    if len(arr) == 4:
        print(arr)
        testarr.append(arr)
        return 
    
    for i in range(5):
        if i not in arr or len(arr) == 0:
            arr.append(i)
            test(arr)
            arr.pop()
            
    print(arr)

test([])
print(testarr)