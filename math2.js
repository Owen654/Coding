let a
let c = 0
let c2 = 0
let c3 = 0
for(i=58982;i>0;i++){
    a=Math.random()
    if(a<=1/3){
        c++
    }
    if(a>1/3&&a<=2/3){
        c2++
    }
    if(a>2/3){
        c3++
    }
    print(i)
}
print(c,c2,c3)