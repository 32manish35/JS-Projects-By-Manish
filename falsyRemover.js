const bouncer = (array1) =>{
  let array2 =[]
  for(let i =0;i<array1.length;i++){
    if(array1[i]){
      array2.push(array1[i])
    }
  }
  return array2
}
