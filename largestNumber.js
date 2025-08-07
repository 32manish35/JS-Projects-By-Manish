const largestOfAll=(array)=>{
  let array2 = []
  
for(let i= 0;i<array.length;i++){
  let largestNumber = array[i][0]
  for(let j = 0;j<array[i].length;j++){
    if(array[i][j]>largestNumber){
      largestNumber = array[i][j]
      
    }
   
  } array2.push(largestNumber)
}
return array2
}
