// 28. Use for loop to iterate from 0 to 100 and print only prime numbers

// range = 1 o 20 
for(let number=1 ; number<=100; number++){
    let isPrime = true;

for (let i=2; i<= number-1;i++){
    if(number%i===0){
        isPrime = false;
        break
    }
}
if (isPrime) console.log(number);
}