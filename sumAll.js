const sumAll = (array1) =>{
let num1 = array1[0]
let num2 = array1[1]
let min = Math.min(num1,num2)
let max = Math.max(num1,num2)
let sum =0
for(let i = min;i<=max;i++){
  sum+=i
}
return sum
}
