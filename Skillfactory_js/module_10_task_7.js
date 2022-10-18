let arr =[0, 1, 2, 3, 4, 5, 0]
EvenCounter = 0;
OddCounter = 0;
NullCounter = 0;
for (let i = 0; i<arr.length; i++) {
    if (arr[i] == 0) {
       NullCounter = NullCounter + 1;
        
    }
    else if (arr[i] %2 == 0) {
        EvenCounter = EvenCounter + 1;
       
    }
    else {
        OddCounter = OddCounter + 1;  
    }
}
console.log('Quantity of nulls:', NullCounter)
console.log('Quantity of even:', EvenCounter)
console.log('Quantity of odd:', OddCounter)

